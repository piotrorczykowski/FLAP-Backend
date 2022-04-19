const jwt = require('jsonwebtoken')
const { JWT_ACCESS_SECRET } = require('../configs/generalConfig')

function verifyToken(req, res, next) {
    //  Check if accessToken exists
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) {
        return res.sendStatus(401)
    }

    //  Try to verify token
    jwt.verify(token, JWT_ACCESS_SECRET, (err, data) => {
        if (err) {
            return res.sendStatus(403)
        }

        req.user = data
        next()
    })
}

module.exports = verifyToken
