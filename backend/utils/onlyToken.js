const jwt = require('jsonwebtoken')

function onlytoken(data){
    const a = jwt.verify(data,"87bcyr91283r9b48cb3249pncur34r")
    return a._id
}

module.exports = onlytoken