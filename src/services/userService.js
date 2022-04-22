const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require('../configs/generalConfig')

async function createAccout(firstName, lastName, email, password) {
    try {
        //  Hash user password and create user
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
    try {
        //  Try to find user of email == email
        const user = await User.findOne({ email }).lean()
        if (!user) {
            throw new Error('Incorrect email!')
        }

        //  Check if password correct
        if (await bcrypt.compare(password, user.password)) {
            //  Create payload for tokens
            const payload = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            }

            //  Generate tokens
            const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '1h', })
            const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET)

            const userId = user._id

            return { accessToken, refreshToken, userId }
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
