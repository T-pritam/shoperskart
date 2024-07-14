const jwt = require('jsonwebtoken')

function decode(data){
    return jwt.verify(data,process.env.JWT_SECRET_KEY)
}

module.exports = decode