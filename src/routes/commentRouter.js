const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController')

/*  POST comment    */
router.post('/comments', commentController.create)

/*  GET all comments    */
router.get('/comments', commentController.readAll)

/*  PUT comment  */
router.put('/comments/:id', commentController.update)

/*  DELETE comment  */
router.delete('/comments/:id', commentController.remove)

module.exports = router
