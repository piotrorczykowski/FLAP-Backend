const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
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
