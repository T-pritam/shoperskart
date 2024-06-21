const jwt = require('jsonwebtoken')

function decode(data){
    return jwt.verify(data,"87bcyr91283r9b48cb3249pncur34r")
}

module.exports = decode