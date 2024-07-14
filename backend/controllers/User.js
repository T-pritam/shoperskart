const User = require('../models/user')
const decode = require('../utils/decodeToken')
const generateToken = require('../utils/generateToken')
const sanitize = require('../utils/sanitize')
const onlytoken = require("../utils/onlyToken")

exports.getbyid = async (req,res) =>{
    const token = req.params.id
    const data = await User.findById(decode(token)._id)
    return res.status(200).json(data)
}

exports.getrequired = async (req,res) =>{
    const id = req.params.id
    const data = await User.findById(decode(id).id)
    const existingUser = await User.findById(data)
    const secureInfo=sanitize(existingUser)
    const token = generateToken(secureInfo)
    return res.status(200).json({secureInfo,token})
}

exports.getbymail = async (req,res) =>{
    try{
        const existingUser=await User.findOne({email:req.body.email})
        return res.status(200).json(existingUser._id)
    }
    catch (error) {
        res.status(500).json({message:'InValid Email Try Again'})
    }
}

exports.update = async (req,res) => {
   try{
    req.params.id = decode(req.params.id)._id
    const {id} = req.params
    const data = await User.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json("updated")
   }
    catch (error) {
        console.log(error);
        res.status(500).json({message:'Error getting your details, please try again later'})
    }

}