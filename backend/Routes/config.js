require('dotenv').config({ path: 'jwt.cfg' });

const JWT_KEY = process.env.JWT_KEY;

module.exports = { JWT_KEY }; // Export for other files to use