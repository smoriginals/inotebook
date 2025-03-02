import { useEffect, useContext } from 'react';
import NoteContext from '../Context/NoteContext';

export default function About() {
    const context = useContext(NoteContext);
    const { state, update } = context;

    useEffect(() => {
        update();
    }, []);

    return (
        <>
            <div>
                {state.name} {state.age}
                <h1>About Page</h1>
            </div>
        </>
    );
}
