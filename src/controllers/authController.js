const authService = require('../services/authService')

async function checkAuth(req, res) {
    //  Check if accessToken exists
    const accessToken = req.headers['authorization']?.split(' ')[1]
    if (!accessToken) {
        return res.status(400).json({ message: 'Missing accessToken!' })
    }

    try {
        await authService.verifyAccessToken(accessToken)
        return res.sendStatus(204)
    } catch (err) {
        return res.status(401).json({ message: err.message })
    }
}

async function refreshToken(req, res) {
    //  Check if refreshToken exists
    const refreshToken = req.headers['authorization']?.split(' ')[1]
    if (!refreshToken) {
        return res.status(400).json({ message: 'Missing accessToken!' })
    }

    try {
        const accessToken = await authService.refreshToken(refreshToken)
        return res.status(201).json({ accessToken })
    } catch (err) {
        return res.status(401).json({ message: err.message })
    }
}

module.exports = {
    checkAuth,
    refreshToken,
}
