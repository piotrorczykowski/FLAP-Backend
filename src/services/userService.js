const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require('../configs/generalConfig')

async function createAccout(firstName, lastName, email, password) {
    try {
        //  Hashed user password and create user object
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })

        //  Save user to db
        await newUser.save()
    } catch (err) {
        throw err
    }
}

async function logIn(email, password) {
    //  Try to check password and if password is correct generate tokens
    try {
        //  Try to find user
        const user = await User.findOne({ email }).lean()
        if (!user) {
            throw new Error('Incorrect email!')
        }

        if (await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign(user, JWT_ACCESS_SECRET, { expiresIn: '1h' })
            const refreshToken = jwt.sign(user, JWT_REFRESH_SECRET)
            
            return { accessToken, refreshToken }
        } else {
            throw new Error('Incorrect password!')
        }
    } catch (err) {
        throw err
    }
}

module.exports = {
    createAccout,
    logIn,
}
