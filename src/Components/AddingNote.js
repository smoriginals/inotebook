import React, { useState, useContext } from 'react';
import noteContext from '../Context/NoteContext';
export default function AddingNote() {

    const context = useContext(noteContext);
    const { create } = context;

    const [state, setState] = useState({
        title: "",
        description: "",
        tag: ""
    })

    const handleClick =(e) => {
        //e.preventDefault();
        //create(state.title, state.description, state.tag);
    }

    const onChange = (e) => {
        //setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container col-md-8 my-4">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><b>Note Title</b></label>
                    <input type="text" className="form-control" id="title" name="title" value={state.title} onChange={onChange} />
                    <div id="emailHelp" className="form-text">Use Good & Meaningful Title So Your Note Look Good And Easily Readable</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><b>Note Description</b></label>
                    <input type="text" className="form-control" id="description" name="description" value={state.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><b>Note Tag</b></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={state.tag} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </div>
        </>
    );
}