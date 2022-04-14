const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')

/*  GET all posts  */
router.get('/posts', postController.readAll)

/*  GET one post    */
router.get('/posts/:id', postController.read)

/*  POST post   */
router.post('/posts', postController.create)

/*  DELETE post   */
router.delete('/posts/:id', postController.remove)

/*  PUT post    */
router.put('/posts/:id', postController.update)

module.exports = router
