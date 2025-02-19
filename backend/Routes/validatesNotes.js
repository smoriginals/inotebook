const { body } = require('express-validator');

const validateNotes = [
    body('title', 'Enter a note Title').isLength({ min: 3 }),
    body('description', 'Enter a note description').isLength({ min: 5 }),
    body('tag', 'Enter a tag').isLength({ min: 2 })
];

module.exports = validateNotes;
