const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../Routes/config');


const fetchingUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: "No token, authorization denied", token });
    }
    try {
        const data = jwt.verify(token, JWT_KEY);
        req.user = data.user;
        next();

    }
    catch (err) {
        res.status(401).json({ error: "Token is not valid" });
    }
}

module.exports = fetchingUser;