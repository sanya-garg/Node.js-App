const mongoose = require('mongoose');

//Use Database -  Create Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
}, { timestamps: true }); // will automactically create time and update time

//Create Model
const User = mongoose.model('users', userSchema);

module.exports = User;