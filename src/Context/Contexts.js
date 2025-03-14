import { useContext, useState, useEffect } from 'react';
import ctx from '../Context/NoteContext';

const ContextProvider = (props) => {
    const [notes, setNotes] = useState([]);
    
    const ViewNote = async () => {
        const fetchNotes = await fetch('http://localhost:5000/api/notes/fetchNotes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
            }
        });
        const getNotes = await fetchNotes.json();
        setNotes(getNotes);
        console.log(getNotes);
    }

    useEffect(() => {
        ViewNote();
    }, []);

    return (
        <ctx.Provider value={{ notes,setNotes }}>
            {props.children}
        </ctx.Provider>
    );
}

export default ContextProvider;