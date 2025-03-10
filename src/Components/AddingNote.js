import React from 'react';

export default function AddingNote() {
    return (
        <>
            <div className="container col-md-8 my-4">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label"><b>Note Title</b></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Use Good & Meaningful Title So Your Note Look Good And Easly Readable</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"><b>Note Description</b></label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"><b>Note Tag</b></label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-primary">Add Note</button>
            </div>
        </>
    );
}