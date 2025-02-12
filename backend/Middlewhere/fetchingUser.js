const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../Routes/config');


const fetchingUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ error: "No token, authorization denied",token });
    }
    const tokenS = token.split(' ')[1];
    try {
        const decoded = jwt.verify(tokenS, JWT_KEY);
        req.user = decoded.user;
        next();

    }
    catch (err) {
        res.status(401).json({ error: "Token is not valid" });
    }
}

module.exports = fetchingUser;