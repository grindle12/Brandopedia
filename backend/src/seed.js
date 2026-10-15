
require('dotenv').config();

const mongoose = require('mongoose');
const User = require('./models/User');
const Post = require('./models/Post');
const Connection = require('./models/Connection');

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');

        // Clear previous sample data
        await Promise.all([
            User.deleteMany({}),
            Post.deleteMany({}),
            Connection.deleteMany({})
        ]);

        // Create sample users
        const users = await User.insertMany([
            {
                name: 'Arun Kumar',
                occupation: 'Software Engineer',
                profileImage: 'arun.jpg',
                connectionsCount: 120
            },
            {
                name: 'Priya Sharma',
                occupation: 'UI/UX Designer',
                profileImage: 'priya.jpg',
                connectionsCount: 85
            },
            {
                name: 'Rahul Raj',
                occupation: 'Full Stack Developer',
                profileImage: 'rahul.jpg',
                connectionsCount: 210
            },
            {
                name: 'Sneha Patel',
                occupation: 'Product Manager',
                profileImage: 'sneha.jpg',
                connectionsCount: 150
            },
            {
                name: 'Karthik S',
                occupation: 'Data Analyst',
                profileImage: 'karthik.jpg',
                connectionsCount: 95
            }
        ]);

        // Create sample posts
        await Post.insertMany([
            {
                content: 'Excited to connect with professionals and share ideas!',
                author: users[0]._id,
                image: '',
                createdAt: new Date()
            },
            {
                content: 'A good design makes technology easier for everyone.',
                author: users[1]._id,
                image: '',
                createdAt: new Date(Date.now() - 3600000)
            },
            {
                content: 'Learning, building, and improving every day.',
                author: users[2]._id,
                image: '',
                createdAt: new Date(Date.now() - 7200000)
            }
        ]);

        console.log('Sample users and posts created');
        console.log('Your current user ID:', users[0]._id.toString());

    } catch (error) {
        console.error('Seed error:', error.message);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
