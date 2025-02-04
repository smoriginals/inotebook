const { body, validationResult } = require('express-validator');      // Express Validator.     
const userValidation = require('../Routes/userValidator');            // User Validator.
const { JWT_KEY } = require('../Routes/config');                      // JWT Key.
const User = require('../Models/User');                               // User Model.
const jwt = require('jsonwebtoken');                                  // JWT(from web).
const express = require('express');                                   // Express.
const bcrypt = require('bcryptjs');                                   // Bcrypt(NPM Package).
const router = express.Router();                                      // Router.

// userValidation - Validation a user in userValidator.js please check it.
router.post('/', userValidation, async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: "Authentication Page", errors: errors.array() });
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const passkey = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: passkey,
            phone: req.body.phone
        });
        await user.save();
        const data = { user: { id: user.id } };  // ?? 
        const jwtData = jwt.sign(data, JWT_KEY, { expiresIn: '1h' });
        res.status(201).json({ success: true, message: "Authentication Page",jwtData, user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;



