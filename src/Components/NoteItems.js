import React from 'react';
import '../App.css';
export default function NoteItems(props) {

    const { getNotes } = props;
    return (
        <>
                <div className="card col-md-2 mx-1 my-2">
                    <img src="" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{getNotes.title}</h5>
                        <p className="card-text">  {getNotes.description}</p>
                        <i className="fa-solid fa-user-pen"></i>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
        </>
    )
}