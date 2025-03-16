import React from 'react';

export default function Notes(props) {
    return (
        <>
            <div className="card row my-1 mx-1">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.tag}</h6>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="card-link"><i class="fa-solid fa-file-pen"></i></a>
                    <a href="/" className="card-link"><i class="fa-solid fa-trash"></i></a>
                </div>
            </div>
        </>
    );
}