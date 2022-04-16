const Post = require('../models/postModel')

async function getPost(postId) {
    try {
        //  Return post of _id == postId
        return await Post.findOne({ _id: postId })
    } catch (err) {
        throw err
    }
}

async function getPosts() {
    try {
        //  Return all posts
        return await Post.find({})
    } catch (err) {
        throw err
    }
}

async function createPost(userId, body) {
    try {
        //  Create new post
        const newPost = new Post({
            userId,
            body,
        })

        //  Save post and then return saved post
        return await newPost.save()
    } catch (err) {
        throw err
    }
}

async function updatePost(postId, body, countOfPluses, countOfMinuses, countOfComments) {
    try {
        //  Check if parameter are valid
        if(countOfPluses < 0 || countOfMinuses < 0 || countOfComments < 0) {
            throw new Error('Count of pluses and/or minuses and/or comments cannot be negative!')
        }

        //  Find post of _id == postId
        const post = await Post.findOne({ _id: postId })

        post.body = body
        post.countOfPluses = countOfPluses
        post.countOfMinuses = countOfMinuses
        post.countOfComments = countOfComments

        //  Return updated post
        return await post.save()
    } catch (err) {
        throw err
    }
}

async function deletePost(postId) {
    try {
        //  Delete post of _id == postId
        await Post.deleteOne({ _id: postId })
    } catch (err) {
        throw err
    }
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost,
}
