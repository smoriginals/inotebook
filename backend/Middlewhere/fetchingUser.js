const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const JWT_KEY = process.env.JWT_KEY;
const bcrypt = require('bcryptjs');


const fetchingUser = (req, res, next) => {

    const tokenData = req.header("Authorization"); // Include user ID
    
    console.log("Token received:", tokenData);
    if (!tokenData) {
        return res.status(401).send({ error: "Authentication Error" });
    }
    try {
        const data = jwt.verify(tokenData, JWT_KEY);
        req.user = data.user;
        next();
    }
    catch (err) {
        console.log(err.message);
        res.status(401).send({ error: "Authentication Field" });
    }
}
module.exports = fetchingUser;