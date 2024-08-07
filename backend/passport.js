const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport')
const User = require('./models/user')
const generateToken = require('./utils/generateToken')
const sanitize = require('./utils/sanitize')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`
},
  async (accessToken, refreshToken, profile, done) => {
    try {
		let user = await User.findOne({ email: profile.emails[0].value })
		if (user == null) {
			const pass = profile.id.substring(profile.id.length-6) + profile.name.givenName.substring(profile.name.givenName.length -2)
			const hashedPassword=await bcrypt.hash(pass,10)
			const createdUser=new User({
				firstname: profile.name.givenName,
				lastname: profile.name.familyName,
				email: profile.emails[0].value,
				isVerified: true,
				password: hashedPassword,
				profileImage: profile._json.picture
			})
			await createdUser.save()
		}
		let existingUser = await User.findOne({ email: profile.emails[0].value });
		const token = jwt.sign({id : existingUser._id},process.env.JWT_SECRET_KEY)
		return done(null, {"token" : token});
	} catch (err) {
		console.log("err" , err)
		// done(err, null);
	}
  }
));