import React,{ useEffect, useContext } from 'react';
import NoteContext from '../Context/NoteContext';

export default function About() {

    const context = useContext(NoteContext);
    const { state, setState } = context;

    useEffect(() => {
        
    }, []);

    return (
        <>
            <div>
                {state[0].name} {state[1].age}
                
                <h1>About Page</h1>
            </div>
        </>
    );
}
