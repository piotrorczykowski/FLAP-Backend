const Comment = require('../models/commentModel')

async function createComment(userId, postId, body) {
    try {
        const newComment = new Comment({
            userId,
            postId,
            body,
        })

        const comment = await newComment.save()
        return comment
    } catch (err) {
        throw err
    }
}

async function getComments() {
    try {
        const comments = await Comment.find({})
        return comments
    } catch (err) {
        throw err
    }
}

async function updateComment(id, body, countOfPluses, countOfMinuses) {
    try {
        const comment = await Comment.findOne({ _id: id })

        comment.body = body
        comment.countOfPluses = countOfPluses
        comment.countOfMinuses = countOfMinuses

        await comment.save()
        return comment
    } catch (err) {
        throw err
    }
}

async function deleteComment(id) {
    try {
        await Comment.deleteOne({ _id: id })
    } catch (err) {
        throw err
    }
}

module.exports = {
    createComment,
    getComments,
    updateComment,
    deleteComment,
}
