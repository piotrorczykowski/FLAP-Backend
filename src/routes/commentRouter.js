const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')
const verifyToken = require('../middlewares/jwtMiddleware')

/*  POST comment    */
router.post('/comments', verifyToken, commentController.create)

/*  GET all comments    */
router.get('/comments', verifyToken, commentController.readAll)

/*  PUT comment  */
router.put('/comments/:id', verifyToken, commentController.update)

/*  DELETE comment  */
router.delete('/comments/:id', verifyToken, commentController.remove)

module.exports = router
