import NoteContext from '../Context/NoteContext';
import { useState, useEffect } from 'react';

const NoteState = (props) => {
    const port = 'http://localhost:5000';
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch(`${port}/api/notes/fetchNotes`);
            const data = await response.json();
            setState(data);
            console.log(data);
        };
        fetchNotes();
    }, []);

    //const create = (title, description, tag) => {
    //    const note = {
    //        "_id": "67b8a8e495da8d310315b9f5",
    //        "user": "67ae2ffcdf241aef92746a4d",
    //        "title": title,  //title
    //        "description": description,   //description
    //        "tag": tag,  //user tag
    //        "date": new Date().toISOString(),
    //        "__v": 0
    //    };
    //    setState([...state, note]);
    //}
    //const edit = () => {

    //}
    //const erase = () => {

    //}

    return (
        <NoteContext.Provider value={{ state, setState}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
