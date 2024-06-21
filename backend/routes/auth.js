const express = require('express')
const Authrouter=express.Router()
const authController=require("../controllers/Auth")

Authrouter.get('/getall',authController.getall)
Authrouter.get('/deleteall',authController.deleteall)
Authrouter.post('/signup',authController.signup)
Authrouter.post('/Login',authController.login)
Authrouter.get('/resend-otp',authController.resend_otp)
Authrouter.post('/Verify-otp',authController.verifyOtp)
Authrouter.post("/forgot-password",authController.forgotPassword)
Authrouter.post("/reset-password",authController.resetPassword)
Authrouter.get("/logout",authController.logout)





module.exports = Authrouter