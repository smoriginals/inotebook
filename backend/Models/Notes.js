const mongoose = require('mongoose');


const NotesSchema = new mongoose({
    title: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    tag: {
        type: string,
        default: 'general'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.export = mongoose.model('notes',NotesSchema);