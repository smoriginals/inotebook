import { useState, useEffect } from 'react';
import noteContext from '../Context/NoteContext';

const ContextProvider = (props) => {

    const [notes, setNotes] = useState([]);

    const ViewNote = async () => {
        const response = await fetch('http://localhost:5000/api/notes/fetchNotes', {
            method: 'GET',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE',
                'Content-Type': 'application/json'
            }
        });
        const viewData = await response.json();
        setNotes(viewData);
    }

    const AddNewNote = async (title, description, tag) => {
        const response = await fetch('http://localhost:5000/api/notes/addNote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const addData = await response.json();
        setNotes(notes.concat(addData));
    }
    const DeleteNote = async (id) => {
        
        const response = await fetch(`http://localhost:5000/api/notes/deleteNote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'

            }
        });
        const deleteData = response.json();
        console.log(deleteData);
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }
    useEffect(() => {
        ViewNote();
    }, []);

    return (
        <noteContext.Provider value={{ notes, setNotes,AddNewNote,DeleteNote }}>
            {props.children}
        </noteContext.Provider>
    );
}

export default ContextProvider;
