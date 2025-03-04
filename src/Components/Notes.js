import React, { useState, useContext } from 'react';
import NoteContext from '../Context/NoteContext';
import NoteItems from '../Components/NoteItems';


export default function Notes() {

    const context = useContext(NoteContext);
    const { state, setState } = context;

    return (
        <>
            
            <div className="row m-3 ">
                {state.map((note) => {
                    return <NoteItems getNotes={note} />
                })}
            </div>
        </>
    )
}