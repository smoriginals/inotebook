import React from 'react';

export default function AddingNote() {

    const onChange = () => {
        console.log("I am changed")
    }
    const onClick = () => {
        console.log("I am clicked")
    }
    return (
        <>
            <form className="container my-4">
                <div className="mb-3">
                    <label htmlFor="noteTitle" className="form-label"><b>Note Title</b></label>
                    <input type="text" className="form-control" id="noteTitle" aria-describedby="titleHelp" onChange={ } />
                    <div id="titleHelp" className="form-text">Enter Your Note Title</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="noteDescription" className="form-label"><b>Note Description</b></label>
                    <input type="text" className="form-control" id="noteDescription" onChange={ } />
                </div>
                <div className="mb-3">
                    <label htmlFor="noteTag" className="form-label"><b>Note Tag</b></label>
                    <input type="text" className="form-control" id="noteTag" onChange={ } />
                </div>
                <button type="submit" className="btn btn-primary" onClick={ }>Add Note</button>
            </form>
        </>
    )
}