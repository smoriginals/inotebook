const { body, validationResult } = require('express-validator');      // Express Validator.     
const loginValidation = require('../Routes/loginValidator');
const fetchingUser = require('../Middlewhere/fetchingUser');          // Fetching User.
const userValidation = require('../Routes/userValidator');            // User Validator.
const { JWT_KEY } = require('../Routes/config');                      // JWT Key.
const User = require('../Models/User');                               // User Model.
const jwt = require('jsonwebtoken');                                  // JWT(from web).
const express = require('express');                                   // Express.
const bcrypt = require('bcryptjs');                                   // Bcrypt(NPM Package).
const router = express.Router();                                      // Router.


router.post('/createUser', userValidation, async (req, res) => {

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
        const data = { user: { id: user.id } };
        const jwtToken = jwt.sign(data, JWT_KEY, { expiresIn: '1h' });
        res.status(201).json({ success: true, message: "Authentication Page", jwtToken});
    }
    catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.post('/login', loginValidation, async (req, res) => { 

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({error:"Invalid User Details"});
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({error:"Invalid User Details" });
        }
        const data = { user: { id: user.id } };
        const UserToken = jwt.sign(data, JWT_KEY);
        res.json({ UserToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.post('/getUser', fetchingUser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.status(200).json({
            success: true,
            user,
            message: "User fetched successfully"
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
