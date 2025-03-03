import NoteContext from '../Context/NoteContext';
import { useState } from 'react';

const NoteState = (props) => {

    const mynotes = [
        {
            "_id": "67ae2ffcdf241aef92746a4d",
            "name": "surajsingh1",
            "email": "surajsingh2@gmail.com",
            "phone": "12345678892",
            "date": "2025-02-13T17:46:36.273Z",
            "__v": 0
        },
        {
            "_id": "67ae2ffcdf241aef92746a4d",
            "name": "surajsingh2",
            "email": "surajsingh2@gmail.com",
            "phone": "12345678892",
            "date": "2025-02-13T17:46:36.273Z",
            "__v": 0
        },
        {
            "_id": "67ae2ffcdf241aef92746a4d",
            "name": "surajsingh3",
            "email": "surajsingh2@gmail.com",
            "phone": "12345678892",
            "date": "2025-02-13T17:46:36.273Z",
            "__v": 0
        },
        {
            "_id": "67ae2ffcdf241aef92746a4d",
            "name": "surajsingh4",
            "email": "surajsingh2@gmail.com",
            "phone": "12345678892",
            "date": "2025-02-13T17:46:36.273Z",
            "__v": 0
        }
    ]

    const [state, setState] = useState(mynotes);
    return (
        <NoteContext.Provider value={{ state, setState }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;
