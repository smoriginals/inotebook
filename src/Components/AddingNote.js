import React, { useState, useContext } from 'react';
import noteContext from '../Context/NoteContext';

export default function AddingNote() {

    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    const [note, setNote] = useState({ title: '', description: '', tag: '' });

    const HandleSubmit = (event) => {
        event.preventDefault();
        setNotes([...notes, note]);
        setNote({ title: '', description: '', tag: '' });
    }

    const HandleChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div className="container my-4">
                <div className="mb-3">
                    <label htmlFor="noteTitle" className="form-label"><b>Note Title</b></label>
                    <input type="text" className="form-control" name="title" aria-describedby="titleHelp" placeholder="Enter Note Title" onChange={HandleChange} value={note.title} />
                    <div name="titleHelp" className="form-text">Enter Your Note Title</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="noteDescription" className="form-label"><b>Note Description</b></label>
                    <input type="text" className="form-control" name="description" placeholder="Enter Description" onChange={HandleChange} value={note.description} />
                </div>
                <div className="mb-3">
                    <label htmlFor="noteTag" className="form-label"><b>Note Tag</b></label>
                    <input type="text" className="form-control" name="tag" placeholder="@example,general...etc" onChange={HandleChange} value={note.tag} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Add Note</button>
            </div>
        </>
    )
}
