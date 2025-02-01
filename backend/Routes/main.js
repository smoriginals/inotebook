const { body, validationResult } = require('express-validator');
const User = require('../Models/User');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');


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
        const salt = await bcrypt.genSalt(10);
        const passkey = await bcrypt.hash(req.body.password, salt);

        //create an user...
        const user = new User({

            name: req.body.name,
            email: req.body.email,
            password: passkey, // Store the hashed password
            phone: req.body.phone

        });
        //const passkey = new User(password);
        await user.save();
        res.status(201).json({ success: true, message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
