const { body, validationResult } = require('express-validator');      // Express Validator.     
const userValidation = require('../Routes/userValidator');            // User Validator.
const { JWT_KEY } = require('../Routes/config');                      // JWT Key.
const User = require('../Models/User');                               // User Model.
const jwt = require('jsonwebtoken');                                  // JWT(from web).
const express = require('express');                                   // Express.
const bcrypt = require('bcryptjs');                                   // Bcrypt(NPM Package).
const router = express.Router();                                      // Router.

// Register a new user
router.post('/',userValidation, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: "Authentication Page", user });
    }
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, message: "Authentication Page", user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;



