const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;
const User = require('../Models/User');

const fetchingUser = (req, res, next) => {

    const tokenData = { user: { id: user.id } }; // Include user ID
    const token = req.query.token || req.body.token;
    console.log("Token received:", token);
    if (!token) {
        return res.status(401).send({ error: "Authentication Error" });
    }
    try {
        const data = jwt.verify(tokenData, JWT_KEY);
        req.user = data.user;
        next();
    }
    catch (err) {
        console.log(err.message);
        res.status(401).send({ error: "Authentication Error" });
    }
}
module.exports = fetchingUser;