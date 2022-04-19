const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

/*  GET user auth    */
router.get('/auth', authController.checkAuth)

/*  POST refresh token*/
router.post('/refreshToken', authController.refreshToken)

module.exports = router
