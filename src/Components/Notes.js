import React, { useContext } from 'react';
import noteContext from '../Context/NoteContext';
export default function Notes(props) {

    const context = useContext(noteContext);
    const { DeleteNote } = context;
    const { note } = props;

    const deleting = (e) => {
        e.preventDefault();
        DeleteNote(note._id);
    }
    const editNote = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className="card row my-1 mx-1">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.tag}</h6>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="card-link"><i className="fa-solid fa-file-pen" onClick={editNote} ></i></a>
                    <a href="/" className="card-link"><i className="fa-solid fa-trash" onClick={deleting}></i></a>
                </div>
            </div>
        </>
    );
}