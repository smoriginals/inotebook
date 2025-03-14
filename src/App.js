import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import AddingNote from './Components/AddingNote';
import NoteItems from './Components/NoteItems';
import Contexts from '../src/Context/Contexts';
import ContextProvider from '../src/Context/Contexts';
import './App.css';

export default function App() {
    return (
        <>
            <ContextProvider>
                <Navbar />
                <AddingNote />
                <Contexts />
                <Routes>
                    <Route exact path="/about" element={<About />} />
                </Routes>
                <NoteItems />
            </ContextProvider>
        </>
    );
}

