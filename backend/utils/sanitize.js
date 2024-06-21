function sanitize(user){
    return {_id:user._id,name:user.firstname,email:user.email,isVerified:user.isVerified,isAdmin:user.isAdmin}
}

module.exports = sanitize