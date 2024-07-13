const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required: true
    },
    lastname:{
        type : String,
        required: false
    },
    email:{
        type : String,
        required: true
    },
    phone:{
        type : Number,
        required: false,
    },
    Gender:{
        type : String,
        required: false,
    },
    password:{
        type : String,
        required: true,
    },
    profileImage : {
        type: String,
        required: false,
    },
    isVerified:{
        type : Boolean,
        default: false
    },
    isAdmin:{
        type : Boolean,
        default: false
    },
})

const User = mongoose.model("User",userSchema)

module.exports = User