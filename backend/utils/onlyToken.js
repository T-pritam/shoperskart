const jwt = require('jsonwebtoken')

function onlytoken(data){
    const a = jwt.verify(data,process.env.JWT_SECRET_KEY)
    return a._id
}

module.exports = onlytoken