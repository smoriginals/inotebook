const { body, validationResult } = require('express-validator');      // Express Validator.     
const loginValidation = require('../Routes/loginValidator');          // User Validator.
const { JWT_KEY } = require('../Routes/config');                      // JWT Key.
const User = require('../Models/User');                               // User Model.
const jwt = require('jsonwebtoken');                                  // JWT(from web).
const express = require('express');                                   // Express.
const bcrypt = require('bcryptjs');                                   // Bcrypt(NPM Package).
const router = express.Router();                                      // Router.

// userValidation - Validation a user in userValidator.js please check it.
router.post('/login', loginValidation, async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: "Validation failed", errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" });
        }
        const data = { user: { id: user.id } };
        const jwtData = jwt.sign(data, JWT_KEY, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: "User registered successfully", jwtData, user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        console.error(error.message);

    }
});

module.exports = router;
