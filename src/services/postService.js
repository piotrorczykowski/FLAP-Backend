const Post = require('../models/postModel')

async function getPost(id) {
    try {
        const post = await Post.findOne({ _id: id })
        return post
    } catch (err) {
        throw err
    }
}

async function getPosts() {
    try {
        const posts = await Post.find({})
        return posts
    } catch (err) {
        throw err
    }
}

async function savePost(userId, body) {
    try {
        const newPost = new Post({
            userId,
            body,
        })

        const post = await newPost.save()
        return post
    } catch (err) {
        throw err
    }
}

async function updatePost(id, body, countOfPluses, countOfMinuses, countOfComments) {
    try {
        const post = await Post.findOne({ _id: id })

        post.body = body
        post.countOfPluses = countOfPluses
        post.countOfMinuses = countOfMinuses
        post.countOfComments = countOfComments

        await post.save()
        return post
    } catch (err) {
        throw err
    }
}

async function deletePost(id) {
    try {
        await Post.deleteOne({ _id: id })
    } catch (err) {
        throw err
    }
}

module.exports = {
    getPost,
    getPosts,
    savePost,
    updatePost,
    deletePost,
}
