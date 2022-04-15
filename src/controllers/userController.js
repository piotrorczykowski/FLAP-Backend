const userService = require('../services/userService')

async function signUp(req, res) {
    //  Check if every parameter exists
    const { firstName, lastName, email, password } = req.body
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Not all parameters are given!' })
    }

    //  Try to sign up
    try {
        await userService.createAccout(firstName, lastName, email, password)
        return res.status(201).json({ message: 'User registered successfully!' })
    } catch (err)  {
        return res.status(500).json({ message: err.message })
    }
}

async function signIn(req, res) {
    //  Check if every parameter exists
    const { email, password } = req.body
    if(!email || !password) {
        return res.status(400).json({ message: 'Not all parameters are given!' })
    }
    
    //  Try to sign in
    try {
        const { accessToken, refreshToken } = await userService.logIn(email, password)
        return res.status(200).json({ accessToken, refreshToken  })
    } catch (err)  {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    signUp,
    signIn,
}
