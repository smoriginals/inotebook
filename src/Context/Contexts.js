import { useState, useEffect } from 'react';
import ctx from '../Context/NoteContext';

const ContextProvider = (props) => {
    //Resposiable for View Note.
    const [notes, setNotes] = useState([]); 
    //Resposiable for Adding Note.
    const [addNote, setAddNote] = useState({
        title: '',
        description: '',
        tag: ''
    });

    const ViewNote = async () => {
        try {
            const fetchNotes = await fetch('http://localhost:3000/api/notes/fetchNotes', {
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

    const AddNewNote = async (note) => {
        try {
            const { title, description, tag } = note;
            const response = await fetch('http://localhost:3000/api/notes/addNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
                },
                body: JSON.stringify({
                    title: note.title,
                    description: note.description,
                    tag: note.tag
                })
            });
            const data = await response.json();
            setAddNote({
                title: note.title,
                description: note.description,
                tag: note.tag
            });
            ViewNote();
        } catch (error) {
            console.error('Error adding new note:', error);
        }
    
    }

    useEffect(() => {
        ViewNote();
    }, []);

    return (
        <ctx.Provider value={{ notes, setNotes, AddNewNote,addNote,setAddNote }}>
            {props.children}
        </ctx.Provider>
    );
}

export default ContextProvider;