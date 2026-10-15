
const express = require('express');
const router = express.Router();

const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().sort({ name: 1 });

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch users',
            error: error.message
        });
    }
});

// GET one user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            message: 'Invalid user ID'
        });
    }
});

module.exports = router;
