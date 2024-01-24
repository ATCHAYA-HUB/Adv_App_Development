//import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} /> 
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;