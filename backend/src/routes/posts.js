
const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// GET all posts for the Home feed
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', 'name occupation profileImage')
            .sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch posts',
            error: error.message
        });
    }
});

// GET one post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'name occupation profileImage');

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({
            message: 'Invalid post ID'
        });
    }
});

module.exports = router;
