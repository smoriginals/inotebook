import React from 'react';

export default function NoteItems(props) {

    const {getNotes } = props;
    return (
        <>
            <div className="card col-md-3 m-3 ">
                <img src="" className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">{getNotes.title}</h5>
                    <p className="card-text">  {getNotes.description}</p>
                    <a href="/" className="btn btn-primary">Edit</a>
                    </div>
            </div>
        </>
    )
}