//Step 7: create a file that use for send request to the api end point and save the data in the database.

const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');

// Register a new user
router.post('/', [
    //Express Validator for the validation.
    body('name', 'Enter valid Name').isLength({ min: 3 }),
    body('email', 'Enter valid Email').isEmail(),
    body('password', 'Enter a Strong Password').isLength({ min: 6 }),
    body('phone', 'Enter a valid No').isNumeric().isLength({ min: 10, max: 15 })
], async (req, res) => {
    //check validation of request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: "Validation failed", errors: errors.array() });
    }
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
