import React, { useState,useContext} from 'react';
import ctx from '../Context/NoteContext';

export default function AddingNote() {

    const context = useContext(ctx);
    const { AddNewNote } = context;

    const [inputValue, setInputValue] = useState({
        title: "",
        description: "",
        tag: ""
    });


    const HandleChange = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }
    const HandleSubmit = (event) => {
        event.preventDefault();
        AddNewNote({
            title: inputValue.title,
            description: inputValue.description,
            tag: inputValue.tag
        });
        console.log("Form Submitted",inputValue);
    }

    return (
        <>
            <form className="container my-4">
                <div className="mb-3">
                    <label htmlFor="noteTitle" className="form-label"><b>Note Title</b></label>
                    <input type="text" className="form-control" name="title" aria-describedby="titleHelp" placeholder="Enter Note Title" onChange={ HandleChange} />
                    <div name="titleHelp" className="form-text">Enter Your Note Title</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="noteDescription" className="form-label"><b>Note Description</b></label>
                    <input type="text" className="form-control" name="description"  placeholder="Enter Description"onChange={HandleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="noteTag" className="form-label"><b>Note Tag</b></label>
                    <input type="text" className="form-control" name="tag"  placeholder="@example,general...etc"onChange={HandleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Add Note</button>
            </form>
        </>
    )
}