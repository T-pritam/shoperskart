const User = require('../models/user')
const OTP = require('../models/OTP')
const bcrypt = require('bcryptjs')
const {sendMail} = require("../utils/sendmail")
const {sendOTP} = require("../utils/sendotp")
const generateToken = require('../utils/generateToken')
const sanitize = require('../utils/sanitize')
const generateOTP = require('../utils/generateOTP')
const passport = require("passport")
const PasswordResetToken = require('../models/passwordResetToken')

exports.getall = async(req,res) => {
    all = await User.find({})
    return res.json(all)
}
exports.deleteall = async(req,res) => {
    all = await User.deleteMany({})
    return res.json(all)
}

exports.signup=async(req,res)=>{
    try {
        const existingUser=await User.findOne({email:req.body.email})
        
        // if user already exists
        if(existingUser && existingUser.isVerified == false){
            return res.status(400).json({"message":"User already exists but Email not verified"})
        }
        if(existingUser){
            return res.status(400).json({"message":"Email already exists"})
        }

        // hashing the password
        const hashedPassword=await bcrypt.hash(req.body.password,10)
        req.body.password=hashedPassword

        // creating new user
        const createdUser=new User(req.body)
        await createdUser.save()

        // getting secure user info
        const secureInfo=sanitize(createdUser)

        res.status(201).json(createdUser._id)

    } catch (error) {
        res.status(500).json({message:"Error occured during signup, please try again later"})
    }
}
exports.login=async(req,res)=>{
    try {
        // checking if user exists or not
        const existingUser=await User.findOne({email:req.body.email})

        // if exists and password matches the hash
        if(existingUser && (await bcrypt.compare(req.body.password,existingUser.password))){

            // getting secure user info
            const secureInfo=sanitize(existingUser)

            // generating jwt token
            const token=generateToken(secureInfo)

            // sending jwt token in the response cookies
            res.cookie('token',token)
            return res.status(200).json({secureInfo,"token": token})
        }

        res.clearCookie('token');
        return res.status(404).json({message:"Invalid Credentails"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Some error occured while logging in, please try again later'})
    }
}

exports.resend_otp = async(req,res) => {
    try{
        const token = req.headers.id
        const existingUser = await User.findById(token)
        
        if(!existingUser){
            return res.status(404).json({"mssage":"user not found"})
        }

        await OTP.deleteMany({user:existingUser})
        const otp = generateOTP()
        const hashedOtp = await bcrypt.hash(otp,10)
        const newOtp = OTP.create({user:existingUser._id,otp:hashedOtp,expiresAt:Date.now()+parseInt(600000)})
        await sendOTP(existingUser.email,otp)
        return res.status(201).json({"message" : "OTP sent"})
    }
    catch(error){
        res.status(500).json({'message':"Some error occured while resending otp, please try again later"})
        console.log(error);
    }
}

exports.verifyOtp=async(req,res)=>{
    try {
        // checks if user id is existing in the user collection
        const id = req.headers.id
        const isValidUserId=await User.findById(id)

        // if user id does not exists then returns a 404 response
        if(!isValidUserId){
            return res.status(404).json({message:'User not Found, for which the otp has been generated'})
        }

        // checks if otp exists by that user id
        const isOtpExisting=await OTP.findOne({user:isValidUserId._id})

        // if otp does not exists then returns a 404 response
        if(!isOtpExisting){
            return res.status(404).json({message:'OTP not found'})
        }

        // checks if the otp is expired, if yes then deletes the otp and returns response accordinly
        if(isOtpExisting.expiresAt < new Date()){
            await OTP.findByIdAndDelete(isOtpExisting._id)
            return res.status(400).json({message:"OTP has been expired"})
        }
        
        // checks if otp is there and matches the hash value then updates the user verified status to true and returns the updated user

        if(isOtpExisting && (await bcrypt.compare(req.body.otp,isOtpExisting.otp))){

            await OTP.findByIdAndDelete(isOtpExisting._id)
            const verifiedUser=await User.findByIdAndUpdate(isValidUserId._id,{isVerified:true},{new:true})
            const secureInfo=sanitize(verifiedUser)
            const token=generateToken(secureInfo)
            return res.status(200).json(token)
        }

        // in default case if none of the conidtion matches, then return this response
        return res.status(400).json({message:'OTP invalid or expired'})


    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Some Error occured"})
    }
}


exports.forgotPassword=async(req,res)=>{
    let newToken;
    try {
        // checks if user provided email exists or not
        const isExistingUser=await User.findOne({email:req.body.email})

        // if email does not exists returns a 404 response
        if(!isExistingUser){
            return res.status(404).json({message:"Provided email does not exists"})
        }
        if(isExistingUser.isVerified == false){
            return res.status(404).json({message:"Provided email is not verified"})
        }

        await PasswordResetToken.deleteMany({user:isExistingUser._id})

        // if user exists , generates a password reset token
        const passwordResetToken=generateToken(sanitize(isExistingUser),true)

        // hashes the token
        const hashedToken=await bcrypt.hash(passwordResetToken,10)

        // saves hashed token in passwordResetToken collection
        newToken=new PasswordResetToken({user:isExistingUser._id,token:hashedToken,expiresAt:Date.now() + 600000 })
        await newToken.save()

        await sendMail(isExistingUser.email,`${process.env.URL}/reset-password/${isExistingUser._id}/${passwordResetToken}`,isExistingUser.firstname)


        const link = `${process.env.URL}/reset-password/${isExistingUser._id}/${passwordResetToken}`
        res.status(200).json({message:`Password Reset link sent to ${isExistingUser.email}`,"Link" : link})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error occured while sending password reset mail'})
    }
}

exports.resetPassword=async(req,res)=>{
    try {
        // checks if user exists or not
        const isExistingUser=await User.findById(req.body.user)
        // if user does not exists then returns a 404 response
        if(!isExistingUser){
            return res.status(404).json({message:"User does not exists"})
        }

        // fetches the resetPassword token by the userId
        const isResetTokenExisting=await PasswordResetToken.findOne({user:isExistingUser._id})

        // If token does not exists for that userid, then returns a 404 response
        if(!isResetTokenExisting){
            return res.status(404).json({message:"Reset Link is Not Valid"})
        }

        // if the token has expired then deletes the token, and send response accordingly
        if(isResetTokenExisting.expiresAt < new Date()){
            await PasswordResetToken.findByIdAndDelete(isResetTokenExisting._id)
            return res.status(404).json({message:"Reset Link has been expired"})
        }

        // if token exists and is not expired and token matches the hash, then resets the user password and deletes the token
        if(isResetTokenExisting && isResetTokenExisting.expiresAt>new Date() && (await bcrypt.compare(req.body.token,isResetTokenExisting.token))){

            // deleting the password reset token
            await PasswordResetToken.findByIdAndDelete(isResetTokenExisting._id)

            // resets the password after hashing it
            await User.findByIdAndUpdate(isExistingUser._id,{password:await bcrypt.hash(req.body.password,10)})
            return res.status(200).json({message:"Password Updated Successfuly"})
        }

        return res.status(404).json({message:"Reset Link has been expired"})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error occured while resetting the password, please try again later"})
    }
}

exports.logout=async(req,res)=>{
    try {
        res.cookie('token',"")
        res.status(200).json({message:'Logout successful'})
    } catch (error) {
        console.log(error);
    }
}

exports.loginfailed = (req,res) => {
        res.status(401).json({
            error: true,
            message: "Log in failure",
        });
}

exports.loginsuccess = (req,res) => {

        if (req.user) {
            res.status(200).json({
                error: false,
                message: "Successfully Loged In",
                user: req.user,
            });
        } else {
            res.status(403).json({ error: true, message: "Not Authorized" });
        }
}