import { useState, useEffect } from 'react';
import ctx from '../Context/NoteContext';

const ContextProvider = (props) => {

    // Responsible for View Note.
    const [notes, setNotes] = useState([]); 
    // Also Responsible for Adding Note.

    const ViewNote = async () => {
        try {
            const fetchNotes = await fetch('http://localhost:5000/api/notes/fetchNotes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
                }
            });
            const getNotes = await fetchNotes.json();
            setNotes(getNotes);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    }

    const AddNewNote = async (title, description, tag) => {
        try {
            const response = await fetch('http://localhost:5000/api/notes/addNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
                },
                body: JSON.stringify({ title, description, tag })
            });
            if (!response.ok) {
                throw new Error("Failed to add note");
            }
            const data = await response.json();
            setNotes(notes.concat(data));

            console.log("Note Added Successfully:", data);
        } catch (error) {
            console.error('Error adding new note:', error);
        }
    }

    useEffect(() => {
        ViewNote();
    }, []);

    return (
        <ctx.Provider value={{ notes, setNotes, AddNewNote }}>
            {props.children}
        </ctx.Provider>
    );
}

export default ContextProvider;