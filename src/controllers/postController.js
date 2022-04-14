const postService = require('../services/postService')

async function create(req, res) {
    //  Check if every parameter exists
    const { userId, body } = req.body
    if(!userId || !body) {
        return res.status(400).json({ message: 'Not all parameters are given!' })
    }

    try {
        const post = await postService.savePost(userId, body)
        return res.status(201).send(post)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function read(req, res) {
    //  Check if id exists
    const id = req.params.id
    if(!id)
    {
        return res.status(400).json({ message: 'Missing post id!' })
    }

    //  Try to get post of _id == id
    try {
        const post = await postService.getPost(id)
        return res.status(200).send(post)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function readAll(req, res) {
    //  Try to get all posts
    try {
        const posts = await postService.getPosts()
        return res.status(200).send(posts)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function update(req, res) {
    //  Check if id exists
    const id = req.params.id
    if(!id)
    {
        return res.status(400).json({ message: 'Missing post id!' })
    }

    //  Check if every parameter exists
    const { body, countOfPluses, countOfMinuses, countOfComments } = req.body
    if(!body || countOfPluses === undefined || countOfMinuses === undefined || countOfComments === undefined) {
        return res.status(400).json({ message: 'Not all parameters are given!' })
    }

    //  Try to update post of _id == id
    try {
        await postService.updatePost(id, body, countOfPluses, countOfMinuses, countOfComments)
        return res.sendStatus(204)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

async function remove(req, res) {
    //  Check if id exists
    const id = req.params.id
    if(!id)
    {
        return res.status(400).json({ message: 'Missing post id!' })
    }

    //  Try to delete post of _id == id
    try {
        await postService.deletePost(id)
        return res.sendStatus(204)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    create,
    read,
    readAll,
    remove,
    update,
}
