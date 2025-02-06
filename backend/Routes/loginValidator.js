const { body } = require('express-validator');

const loginValidation = [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a Strong Password').isLength({ min: 6 })
];

module.exports = loginValidation;
