//Step 5 : Create a model for the user and take user details such as name, email, password, phone number, and date to store in the database.
//Step 6 : same as you can create Notes.js like its use for note so its requirement is like a book such as his title, description, tag, and date.

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', UserSchema);

