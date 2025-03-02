import NoteContext from '../Context/NoteContext';
import { useState } from 'react';

const NoteState = (props) => {

    const myState = {
        "name": "Alex",
        "age": "24"
    }

    const [state, setState] = useState(myState);

    const update = () => {
        setTimeout(() => {
            setState({              //calling the setState
                "name": "Williams",  //Modify Values
                "age": "34"          //Modify Values
            })
        }, 1000)                     //After 1 sec...
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;

