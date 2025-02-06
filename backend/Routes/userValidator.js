const { body } = require('express-validator');

const userValidation = [
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a Strong Password').isLength({ min: 6 }),
    body('phone', 'Enter a valid Number').isNumeric().isLength({ min: 10, max: 15 })
];

module.exports = userValidation;


