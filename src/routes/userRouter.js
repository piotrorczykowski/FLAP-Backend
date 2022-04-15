const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/*  POST sign up user   */
router.post('/signup', userController.signUp)

/*  POST sign in user   */
router.post('/signin', userController.signIn)

module.exports = router
