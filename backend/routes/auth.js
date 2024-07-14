const express = require('express')
const Authrouter=express.Router()
const authController=require("../controllers/Auth")
const passport = require('passport')

Authrouter.get('/getall',authController.getall)
Authrouter.get('/deleteall',authController.deleteall)
Authrouter.post('/signup',authController.signup)
Authrouter.post('/Login',authController.login)
Authrouter.get('/resend-otp',authController.resend_otp)
Authrouter.post('/Verify-otp',authController.verifyOtp)
Authrouter.post("/forgot-password",authController.forgotPassword)
Authrouter.post("/reset-password",authController.resetPassword)
Authrouter.get("/logout",authController.logout)

Authrouter.get('/google',
	passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));
  
Authrouter.get('/google/callback',
	passport.authenticate('google', { session: false, failureRedirect: `${process.env.URL}/login` }),
	(req, res) => { 
	  // Access user object and tokens from req.user
	  // Successful authentication, redirect home.
	  res.redirect(`${process.env.URL}/?token=${req.user.token}`);
	});





module.exports = Authrouter