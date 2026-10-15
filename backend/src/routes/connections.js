
const express = require('express');
const router = express.Router();

const Connection = require('../models/Connection');
const User = require('../models/User');

// GET connections for a user
router.get('/:userId', async (req, res) => {
    try {
        const connections = await Connection.find({
            $or: [
                { requester: req.params.userId },
                { recipient: req.params.userId }
            ]
        })
            .populate('requester', 'name occupation profileImage')
            .populate('recipient', 'name occupation profileImage');

        res.status(200).json(connections);
    } catch (error) {
        res.status(400).json({
            message: 'Failed to fetch connections',
            error: error.message
        });
    }
});

// SEND a connection request
router.post('/', async (req, res) => {
    try {
        const { requester, recipient } = req.body;

        if (!requester || !recipient) {
            return res.status(400).json({
                message: 'Requester and recipient are required'
            });
        }

        if (requester === recipient) {
            return res.status(400).json({
                message: 'You cannot connect with yourself'
            });
        }

        const [requesterUser, recipientUser] = await Promise.all([
            User.findById(requester),
            User.findById(recipient)
        ]);

        if (!requesterUser || !recipientUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const existing = await Connection.findOne({
            $or: [
                { requester, recipient },
                { requester: recipient, recipient: requester }
            ]
        });

        if (existing) {
            return res.status(409).json({
                message: 'A connection request already exists'
            });
        }

        const connection = await Connection.create({
            requester,
            recipient,
            status: 'pending'
        });

        res.status(201).json(connection);
    } catch (error) {
        res.status(400).json({
            message: 'Failed to send request',
            error: error.message
        });
    }
});

// ACCEPT a connection request
router.patch('/:id/accept', async (req, res) => {
    try {
        const connection = await Connection.findById(req.params.id);

        if (!connection) {
            return res.status(404).json({
                message: 'Connection request not found'
            });
        }

        if (connection.status !== 'pending') {
            return res.status(400).json({
                message: 'This request is not pending'
            });
        }

        connection.status = 'accepted';
        await connection.save();

        res.status(200).json({
            message: 'Connection accepted',
            connection
        });
    } catch (error) {
        res.status(400).json({
            message: 'Failed to accept request',
            error: error.message
        });
    }
});

module.exports = router;
