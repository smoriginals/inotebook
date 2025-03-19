const express = require('express');
const router = express.Router();
const Notes = require('../Models/Notes');
const { body, validationResult } = require('express-validator');
const validateNotes = require('../Routes/validatesNotes');
const fetchUser = require('../Middlewhere/fetchingUser');

//router.post('/addNotes', fetchUser, validateNotes, async (req, res) => {
//    try {
//        const errors = validationResult(req);
//        if (!errors.isEmpty()) {
//            return res.status(400).json({ error: errors.array() })
//        }
//        const { title, description, tag } = req.body;
//        const note = new Notes({
//            title, description, tag, user: req.user.id
//        });
//        const saveNote = await note.save();
//        res.json(saveNote);
//    }
//    catch (error) {
//        console.error(error.message, "Error Occured");
//    }
//});
// Example backend route for adding a note
router.post('/api/notes/addNote', fetchUser, validateNotes, async (req, res) => {
    try {
        console.log('Received request to add note:', req.body);

        // Create a new note
        const newNote = new Note({
            user: req.user.id, // From JWT token
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag || 'General'
        });

        // Save to database
        const savedNote = await newNote.save();
        console.log('Note saved to database:', savedNote);

        // Return the saved note
        res.json(savedNote);
    } catch (error) {
        console.error('Error adding note:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.get('/fetchNotes',fetchUser, async (req, res) => {
    try {
        //const { title, description, tag } = req.body;
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch(error) {
        console.error(error.message, "Error Occured");
    }
});

router.put('/updateNotes/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
        newNote.title = title;
    }
    if (description) {
        newNote.description = description;
    }
    if (tag) {
        newNote.tag = tag;
    }
    let note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });
   
})

router.delete('/deleteNotes/:id', fetchUser, async (req, res) => {
    const { title, description, tag } = req.body;

    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id, { new: true });
    res.json({note:note});

})
module.exports = router;




