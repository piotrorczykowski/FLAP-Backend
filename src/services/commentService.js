const Comment = require('../models/commentModel')

async function createComment(postId, userId, body) {
    try {
        //  Create new comment
        const newComment = new Comment({
            userId,
            postId,
            body,
        })

        //  Save comment and then return saved comment
        return await newComment.save()
    } catch (err) {
        throw err
    }
}

async function getComments() {
    try {
        //  Return all comments
        return await Comment.find({})
    } catch (err) {
        throw err
    }
}

async function updateComment(commentId, body, countOfPluses, countOfMinuses) {
    try {
        //  Check if parameter are valid
        if(countOfPluses < 0 || countOfMinuses < 0) {
            throw new Error('Count of pluses and/or minuses cannot be negative!')
        }

        //  Find comment of _id == commentId
        const comment = await Comment.findOne({ _id: commentId })

        //  Update comment
        comment.body = body
        comment.countOfPluses = countOfPluses
        comment.countOfMinuses = countOfMinuses

        //  Return updated comment
        return await comment.save()
    } catch (err) {
        throw err
    }
}

async function deleteComment(commentId) {
    try {
        //  Delete comment of _id == commentId
        await Comment.deleteOne({ _id: commentId })
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
