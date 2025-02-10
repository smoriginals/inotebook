const User = require('../Models/User');
const express = require('express');
const router = express.Router();
const fetchingUser = require('../Middlewhere/fetchingUser');


router.post('/', fetchingUser, async (req, res) => {
    try {
        const userID = req.user.id;
        console.log("User ID:", userID);
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (err) {
        console.log(err.message);
        res.status(401).send('Error Occurred');
    }
});

module.exports = router;