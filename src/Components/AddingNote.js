//import React, { useState, useContext } from 'react';
//import noteContext from '../Context/NoteContext';

//export default function AddingNote() {

//    const context = useContext(noteContext);
//    const { notes, setNotes, AddNewNote } = context;
//    const [note, setNote] = useState({ title: '', description: '', tag: '' });

//    const HandleSubmit = async (event) => {
//        event.preventDefault();
//        //setNotes([...notes, note]);
//        await AddNewNote(note.title, note.description, note.tag);
//        setNote({ title: '', description: '', tag: '' });
//    }

//    const HandleChange = (event) => {
//        setNote({ ...note, [event.target.name]: event.target.value });
//    }

//    return (
//        <>
//            <div className="container my-4">
//                <div className="mb-3">
//                    <label htmlFor="noteTitle" className="form-label"><b>Note Title</b></label>
//                    <input type="text" className="form-control" name="title" aria-describedby="titleHelp" placeholder="Enter Note Title" onChange={HandleChange} value={note.title} />
//                    <div name="titleHelp" className="form-text">Enter Your Note Title</div>
//                </div>
//                <div className="mb-3">
//                    <label htmlFor="noteDescription" className="form-label"><b>Note Description</b></label>
//                    <input type="text" className="form-control" name="description" placeholder="Enter Description" onChange={HandleChange} value={note.description} />
//                </div>
//                <div className="mb-3">
//                    <label htmlFor="noteTag" className="form-label"><b>Note Tag</b></label>
//                    <input type="text" className="form-control" name="tag" placeholder="@example,general...etc" onChange={HandleChange} value={note.tag} />
//                </div>
//                <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Add Note</button>
//            </div>
//        </>
//    )
//}


import React, { useState, useContext } from 'react';
import noteContext from '../Context/NoteContext';

export default function AddingNote() {
    const context = useContext(noteContext);
    const { AddNewNote } = context; // Make sure this is destructured correctly

    console.log("Context in AddingNote:", context); // Debug the context

    const [note, setNote] = useState({ title: '', description: '', tag: '' });

    //const HandleSubmit = async (event) => {
    //    event.preventDefault();
    //    console.log("Submit button clicked");
    //    console.log("Current note state:", note);

    //    if (!note.title || !note.description) {
    //        alert("Title and description are required!");
    //        return;
    //    }

    //    // Call the AddNewNote function from context
    //    await AddNewNote(note.title, note.description, note.tag);

    //    // Clear the form
    //    setNote({ title: '', description: '', tag: '' });
    //}

    // In AddingNote.js
    const HandleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Direct API call without context
            const response = await fetch('http://localhost:5000/api/notes/addNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
                },
                body: JSON.stringify({
                    title: note.title,
                    description: note.description,
                    tag: note.tag
                })
            });

            console.log("Direct API response:", response.status);
            const data = await response.text();
            console.log("Response data:", data);

            // Clear form
            setNote({ title: '', description: '', tag: '' });
        } catch (error) {
            console.error("Error in direct API call:", error);
        }
    }

    const HandleChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
        console.log("Form updated:", { ...note, [event.target.name]: event.target.value });
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