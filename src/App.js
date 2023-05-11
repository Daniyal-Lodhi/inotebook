import './App.css';
import { Routes ,Route ,BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';



function App() {
  const [alert, setALert] = useState(null)
    const showAlert = (type, message) => {
        setALert({
          type: type,
          message: message
        })
        setTimeout(() => {
          setALert(null)
        }, 2000);
      }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />

          <div className="container">
            <Routes>

              <Route exact path="/Login" element={<Login showAlert = {showAlert} />} />
              <Route exact path="/Signup" element={<Signup showAlert = {showAlert}/>}  />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />



            </Routes>
          </div>
        </Router>

      </NoteState>
    </>
  );
}

export default App;
