const Comment = require('../models/commentModel')
const User = require('../models/userModel')
const Post = require('../models/postModel')

async function createComment(userId, postId, body) {
    try {
        //  Check if user of _id == userId exists
        if(!await User.findOne({ _id: userId })) {
            throw new Error('User doesn\'t exists!')
        }

        //  Check if post of _id == postId exists
        if(!await Post.findOne({ _id: postId })) {
            throw new Error('Post doesn\'t exists!')
        }

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

async function updateComment(commentId, userId, body, countOfPluses, countOfMinuses) {
    try {
        //  Check if parameter are valid
        if(countOfPluses < 0 || countOfMinuses < 0) {
            throw new Error('Count of pluses and/or minuses cannot be negative!')
        }

        //  Find comment of _id == commentId
        const comment = await Comment.findOne({ _id: commentId })

        //  Check if user is owner of the comment
        if(comment.userId != userId) {
            throw new Error('User doesn\'t have permission to update comment!')
        }

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

async function deleteComment(commentId, userId) {
    try {
        //  Find comment of _id == commentId
        const comment = await Comment.findOne({ _id: commentId })

        //  Check if user is owner of the comment
        if(comment.userId != userId) {
            throw new Error('User doesn\'t have permission to update comment!')
        }

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
