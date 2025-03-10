import Notes from '../Components/Notes';
import Navbar from '../Components/Navbar';
import AddingNote from '../Components/AddingNote';
export default function Home() {

    return (
        <>
            <Navbar />
            <AddingNote/>
            <Notes/>
        </>
    )
}