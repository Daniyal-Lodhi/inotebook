import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';



function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />


          </Routes>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
