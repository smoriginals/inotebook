import React, { useState, useContext } from 'react';
import NoteContext from '../Context/NoteContext';
import NoteItems from '../Components/NoteItems';
import AddingNote from '../Components/AddingNote';

export default function Notes() {

    const context = useContext(NoteContext);
    const { state, setState } = context;

    return (
        <>
            <AddingNote />
            <div className="row d-flex flex-wrap justify-content-center">
                {
                    state.map((note) => {
                        return <NoteItems getNotes={note} />
                    })
                }
            </div>
        </>
    )
}