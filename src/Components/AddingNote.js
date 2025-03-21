import React, { useState, useContext } from 'react';
import noteContext from '../Context/NoteContext';

export default function AddingNote() {

    const context = useContext(noteContext);
    const { AddNewNote } = context;
    const [note, setNote] = useState({ title: '', description: '', tag: '' });
    const [errors, setErrors] = useState({ title: '', description: '', tag: '' });

    const HandleChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    const validate = () => {
        let tempErrors = { title: '', description: '', tag: '' };
        let isValid = true;

        if (!note.title) {
            tempErrors.title = 'Title is required';
            isValid = false;
        }
        if (!note.description) {
            tempErrors.description = 'Description is required';
            isValid = false;
        }
        if (!note.tag) {
            tempErrors.tag = 'Tag is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    }

    const HandleSubmit = async (event) => {
        event.preventDefault();
        if (validate()) {
            AddNewNote(note);
            setNote({
                title: '',
                description: '',
                tag: ''
            });
        }
    }

    return (
        <>
            <div className="container my-4">
                <div className="mb-3">
                    <label htmlFor="noteTitle" className="form-label"><b>Note Title</b></label>
                    <input type="text" className="form-control" name="title" aria-describedby="titleHelp" placeholder="Enter Note Title" onChange={HandleChange} value={note.title} />
                    <div name="titleHelp" className="form-text">Enter Your Note Title</div>
                    {errors.title && <div className="text-danger">{errors.title}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="noteDescription" className="form-label"><b>Note Description</b></label>
                    <input type="text" className="form-control" name="description" placeholder="Enter Description" onChange={HandleChange} value={note.description} />
                    {errors.description && <div className="text-danger">{errors.description}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="noteTag" className="form-label"><b>Note Tag</b></label>
                    <input type="text" className="form-control" name="tag" placeholder="@example,general...etc" onChange={HandleChange} value={note.tag} />
                    {errors.tag && <div className="text-danger">{errors.tag}</div>}
                </div>
                <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Add Note</button>
            </div>
        </>
    )
}
