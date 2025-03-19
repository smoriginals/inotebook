import React, { useContext } from 'react';
import noteContext from '../Context/NoteContext';
import Notes from '../Components/Notes';


export default function NoteItems() {

    const context = useContext(noteContext);
    const { notes } = context;

    return (
        <>
            {
                notes.map((note) => {
                    return <div className="container col-md-3">
                        <Notes key={note._id} title={note.title} description={note.description} tag={note.tag} />
                    </div>
                })
            }

        </>
    )
}