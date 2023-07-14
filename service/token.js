const jwt = require('jsonwebtoken')

const genereteToken = userId => {
    const accessToken = jwt.sign({userId},process.env.JWT_SECRET, {expiresIn: '30d'})

    return accessToken
}

module.exports = genereteToken

module.exports.checkToken = function(token) {
    try {
        return jwt.verify(token, process.env.verifyTokenSecret)
    } catch (error) {
        return false
    }
}