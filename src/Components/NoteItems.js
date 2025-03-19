import React, { useContext } from 'react';
import ctx from '../Context/NoteContext';
import Notes from '../Components/Notes';
export default function NoteItems() {

    const context = useContext(ctx);
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