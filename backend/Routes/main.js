//Step 7: create a file that use for send request to the api end point and save the data in the database.

const express = require('express');
const router = express.Router();
const User = require('../Models/User');

// Register a new user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, message: "Main Page", user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

module.exports = router;


