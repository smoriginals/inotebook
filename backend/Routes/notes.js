
const express = require('express');
const router = express.Router();
const Notes = require('../Models/Notes');
const { body, validationResult } = require('express-validator');
const validateNotes = require('../Routes/validatesNotes');
const fetchUser = require('../Middlewhere/fetchingUser');

//router.post('/addNotes', fetchUser, validateNotes, async (req, res) => {
//    try {
//        const { title, description, tag } = req.body;
//        const note = new Notes({
//            title, description, tag, user: req.user.id
//        });
//        const errors = validationResult(req);
//        if (!errors.isEmptu()) {
//            return res.status(400).json({ error: errors.array() })
//        }
//        const saveNote = await note.save();
//        res.json(saveNote);
//    }
//    catch (error) {
//        console.error(error.message, "Error Occured");
//    }
//});
router.post('/fetchNotes',fetchUser, async (req, res) => {
    try {
        //const { title, description, tag } = req.body;
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch(error) {
        console.error(error.message, "Error Occured");
    }
});

module.exports = router;


