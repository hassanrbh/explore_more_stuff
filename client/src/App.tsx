import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import "./styles.css"

function App() {
  return (
    <Router>
      <div className="main">
        
      </div>

        
      <Routes>
        <Route path="/sign_up" element={<Register />} />
        <Route path="/sign_in" element={<SignIn />}/>
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
