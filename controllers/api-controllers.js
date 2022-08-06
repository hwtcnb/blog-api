const Post = require('../model/post')

class PostController {
    async getAllPosts(req, res) {
        try {
            const posts = await Post.find({});
            res.json(posts)
        } catch (error) {
            console.log(error.message);
        }
    }

    async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await Post.findById(id)
            res.json(post)
        } catch (error) {
            console.log(error.message);
        }
    }

    async createPost(req, res) {
        try {
            const { title, text, author } = req.body;
            const post = await Post.create({ title, text, author });
            res.json(post)
        } catch (error) {
            console.log(error.message);
        }
    }

    async deletePostById(req, res, next) {
        try {
            const { id } = req.params;
            const post = await Post.findByIdAndDelete(id);
            res.json(post)
        } catch (error) {
            console.log(error.message);
        }
    }

    async UpdatePostById(req, res) {
        try {
            const { id } = req.params;
            const { title, text, author } = req.body;
            const post = await Post.findByIdAndUpdate(id, { title, text, author });
            req.json(post)
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new PostController;