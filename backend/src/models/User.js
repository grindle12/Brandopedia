
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    profileImage: String,
    connectionsCount: {
        type: Number,
        default: 2
    }
});

module.exports = mongoose.model('User', userSchema);
