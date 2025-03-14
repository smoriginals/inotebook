import React, { useContext } from 'react';
import ctx from '../Context/NoteContext';
import Notes from '../Components/Notes';
export default function NoteItems() {

    const context = useContext(ctx);

    if (!context) {
        return <p>Loading...</p>  // Prevent errors if context is missing
    }
    const { notes } = context;

    return (
        <>
            {
                notes.map((note) => {
                    return <Notes key={note._id} title={note.title} description={note.description} tag={note.tag} />
                })
            }

        </>
    )
}