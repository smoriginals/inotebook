import './App.css';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import { Routes, Route } from 'react-router-dom';
import NoteState from './Context/NoteState';

function App() {
    return (
        <>
            <NoteState>
                <Home />
                <Routes>
                    <Route excat path="/about" element={<About />} />
                </Routes>
            </NoteState>
        </>
    );
}

export default App;
