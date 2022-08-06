const { Router } = require('express');
const Post = require('../controllers/api-controllers')

const router = Router();

router.get('/posts', Post.getAllPosts);
router.post('/add-post', Post.createPost);
router.get('/post/:id', Post.getPostById);
router.delete('/post/:id', Post.deletePostById);
router.put('/post/:id', Post.UpdatePostById);

module.exports = router;

