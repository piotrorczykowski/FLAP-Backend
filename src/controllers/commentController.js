const commentService = require('../services/commentService')

async function create(req, res) {
    //  Check if every parameter exists
    const { userId, postId, body } = req.body
    if (!userId || !postId || !body) {
        return res.status(400).json({ message: 'Not all parameters are given!' })
    }

    //  Try to save comment
    try {
        const comment = await commentService.createComment(userId, postId, body)
        return res.status(201).send(comment)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function readAll(req, res) {
    //  Try to get all comments
    try {
        const comments = await commentService.getComments()
        return res.status(200).send(comments)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function update(req, res) {
    //  Check if id exists
    const commentId = req.params.id
    if(!commentId)
    {
        return res.status(400).json({ message: 'Missing comment id!' })
    }
    
    //  Check if every parameter exists
    const { userId, body, countOfPluses, countOfMinuses } = req.body
    if(!userId || !body || countOfPluses === undefined || countOfMinuses === undefined ) {
        return res.status(400).json({ message: 'Not all parameters are given!' })
    }

    //  Try to update comment of _id == commentId
    try {
        const comment = await commentService.updateComment(commentId, userId, body, countOfPluses, countOfMinuses)
        return res.status(201).send(comment)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function remove(req, res) {
    //  Check if id exists
    const commentId = req.params.id
    if (!commentId) {
        return res.status(400).json({ message: 'Missing comment id!' })
    }

    //  Check if userId exists
    const { userId } = req.body
    if(!userId) {
        return res.status(400).json({ message: 'Missing user id!' })
    }
    
    //  Try to delete comment of _id == commentId
    try {
        await commentService.deleteComment(commentId, userId)
        return res.sendStatus(204)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    create,
    readAll,
    update,
    remove,
}
