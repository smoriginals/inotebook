//const express = require('express');
//const router = express.Router();
const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
// Register a new user
router.post('/', [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a strong password').isLength({ min: 6 }),
    body('phone', 'Enter a No').isNumeric().isLength({min:10,max:15})
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: "Notes Page", user });
    }
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ success: true, message: "Notes Page", user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;


