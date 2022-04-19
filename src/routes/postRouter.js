const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const verifyToken = require('../middlewares/jwtMiddleware')

/*  GET all posts  */
router.get('/posts', verifyToken, postController.readAll)

/*  GET one post    */
router.get('/posts/:id', verifyToken, postController.read)

/*  POST post   */
router.post('/posts', verifyToken, postController.create)

/*  DELETE post   */
router.delete('/posts/:id', verifyToken, postController.remove)

/*  PUT post    */
router.put('/posts/:id', verifyToken, postController.update)

module.exports = router
