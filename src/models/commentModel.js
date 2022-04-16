const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true,  
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        countOfPluses: {
            type: Number,
            required: true,
            default: 0,
        },
        countOfMinuses: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
)

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
