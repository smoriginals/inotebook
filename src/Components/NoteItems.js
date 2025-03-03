import React from 'react';

export default function NoteItems(props) {
    const { note } = props;
    return (
        <>
            {note.title}
            {note.description}

        </>
    )
}