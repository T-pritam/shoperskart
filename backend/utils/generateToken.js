const jwt = require("jsonwebtoken")

function generateToken(payload){
    return jwt.sign(payload,"87bcyr91283r9b48cb3249pncur34r")
}

module.exports = generateToken