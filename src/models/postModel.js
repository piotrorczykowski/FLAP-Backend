const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
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
        countOfComments: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
)

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
