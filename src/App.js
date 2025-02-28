import './App.css';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
      <>
          <Home />
          <Routes>
              <Route excat path="/about" element={<About />}></Route>
          </Routes>       
      </>
  );
}

export default App;
