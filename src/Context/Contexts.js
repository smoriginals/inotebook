//import { useState, useEffect } from 'react';
//import noteContext from '../Context/NoteContext';

//const ContextProvider = (props) => {

//    const [notes, setNotes] = useState([]);

//    const ViewNote = async () => {
//        const response = await fetch('http://localhost:5000/api/notes/fetchNotes', {
//            method: 'GET',
//            headers: {
//                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE',
//                'Content-Type': 'application/json'
//            }
//        });
//        const viewData = await response.json();
//        setNotes(viewData);
//    }

//    const AddNewNote = async (title, description, tag) => {
//        const response = await fetch('http://localhost:5000/api/notes/addNote', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json',
//                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
//            },
//            body: JSON.stringify({ title:title, description:description, tag:tag })
//        });

//        const addData = await response.json();
//        setNotes(notes.concat(addData));
//    }

//    useEffect(() => {
//        ViewNote();
//    }, []);

//    return (
//        <noteContext.Provider value={{ notes, setNotes,AddNewNote,ViewNote }}>
//            {props.children}
//        </noteContext.Provider>
//    );
//}

//export default ContextProvider;

import { useState, useEffect } from 'react';
import noteContext from '../Context/NoteContext';

const ContextProvider = (props) => {
    const [notes, setNotes] = useState([]);
    console.log("Current notes state:", notes); // Log current state

    const ViewNote = async () => {
        console.log("ViewNote function called");
        try {
            const response = await fetch('http://localhost:5000/api/notes/fetchNotes', {
                method: 'GET',
                headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE',
                    'Content-Type': 'application/json'
                }
            });

            console.log("Fetch response status:", response.status);

            // Get the raw text first to debug
            const rawText = await response.text();
            console.log("Raw API response:", rawText);

            // Try to parse it as JSON
            let viewData;
            try {
                viewData = JSON.parse(rawText);
                console.log("Parsed notes data:", viewData);
                setNotes(viewData);
            } catch (parseError) {
                console.error("JSON parse error:", parseError);
            }
        } catch (error) {
            console.error("Network error in ViewNote:", error);
        }
    }

    const AddNewNote = async (title, description, tag) => {
        console.log("AddNewNote called with:", { title, description, tag });
        try {
            const noteData = { title, description, tag };
            console.log("Sending to API:", JSON.stringify(noteData));

            const response = await fetch('http://localhost:5000/api/notes/addNote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdhZTJmZmNkZjI0MWFlZjkyNzQ2YTRkIn0sImlhdCI6MTc0MDA3NTI3N30.225OwUKKN4W4U1mDAlbbR9A_lrEqVefdJr4iKRgrPkE'
                },
                body: JSON.stringify(noteData)
            });

            console.log("Add note response status:", response.status);

            // Get the raw text first to debug
            const rawText = await response.text();
            console.log("Raw API response for add:", rawText);

            // Try to parse it as JSON
            let addData;
            try {
                addData = JSON.parse(rawText);
                console.log("Parsed add data:", addData);

                // Update state with new note
                setNotes(prevNotes => {
                    console.log("Previous notes:", prevNotes);
                    const newNotes = [...prevNotes, addData];
                    console.log("New notes array:", newNotes);
                    return newNotes;
                });
            } catch (parseError) {
                console.error("JSON parse error in add:", parseError);
            }
        } catch (error) {
            console.error("Network error in AddNewNote:", error);
        }
    }

    useEffect(() => {
        console.log("Context provider mounted, calling ViewNote");
        ViewNote();
    }, []);

    return (
        <noteContext.Provider value={{ notes, setNotes, AddNewNote, ViewNote }}>
            {props.children}
        </noteContext.Provider>
    );
}

export default ContextProvider;