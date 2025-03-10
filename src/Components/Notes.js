import React, { useState, useContext } from 'react';
import NoteContext from '../Context/NoteContext';
import NoteItems from '../Components/NoteItems';


export default function Notes() {

    const context = useContext(NoteContext);
    const { state, setState } = context;

    return (
        <>
            
            <div className="row d-flex flex-wrap justify-content-center my-4">
                
                {state.map((note) => {
                    return <NoteItems key={note._id} getNotes={note} />
                })}
            </div>
        </>
    )
}