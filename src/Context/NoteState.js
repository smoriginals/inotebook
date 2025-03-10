import NoteContext from '../Context/NoteContext';
import { useState } from 'react';

const NoteState = (props) => {

    const mynotes = [
        {
            "_id": "67b8a8e495da8d310315b9f5",
            "user": "67ae2ffcdf241aef92746a4d",
            "title": "AlexWong",
            "description": "Good book for everyone",
            "tag": "Knowledge",
            "date": "2025-02-21T16:25:08.164Z",
            "__v": 0
        }
    ]


    const create = (title, description, tag) => {
        const note = {
            "_id": "67b8a8e495da8d310315b9f5",
            "user": "67ae2ffcdf241aef92746a4d",
            "title": title,  //title
            "description": description,   //description
            "tag": tag,  //user tag
            "date": new Date().toISOString(),
            "__v": 0
        };
        setState([...state, note]);
    }
    const edit = () => {

    }
    const erase = () => {

    }
    const [state, setState] = useState(mynotes);
    return (
        <NoteContext.Provider value={{ state, setState, create, edit, erase }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
