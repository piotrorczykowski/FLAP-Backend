const jwt = require('jsonwebtoken')
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require('../configs/generalConfig')

async function verifyAccessToken(accessToken) {
    //  Try to verify access token
    try {
        await jwt.verify(accessToken, JWT_ACCESS_SECRET)
    } catch(err) {
        throw err
    }
}

async function refreshToken(refreshToken) {
    //  Try to verify refresh token
    try {
        const result = await jwt.verify(refreshToken, JWT_REFRESH_SECRET)

        //  Create payload for tokens
        const payload = {
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
        }

        //  Create new access token
        const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '1h', })
        return accessToken
    } catch(err) {
        throw err
    }
}

module.exports = {
    verifyAccessToken,
    refreshToken,
}
