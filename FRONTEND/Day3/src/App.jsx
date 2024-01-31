//import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingServicePage from './Components/BookingServicePage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import SkilledNurse from './Components/SkilledNurse';
import MedicationManagement from './Components/MedicationManagement';
import PhysicalTherapy from './Components/PhysicalTherapy';
import Companionship from './Components/Companionship';

import Personalcare from './Components/Personalcare';
const App = () => {
  return (
    <div>
      {/* <BookingServicePage></BookingServicePage> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} /> 
          <Route path="/Login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/SkilledNurse" element={<SkilledNurse/>} />
          <Route path="/BookingServicePage" element={<BookingServicePage/>} />
          <Route path="/Personalcare" element={<Personalcare/>} />
          <Route path="/MedicationManagement" element={<MedicationManagement/>} />
          <Route path="/PhysicalTherapy" element={<PhysicalTherapy/>} />
          <Route path="/Companionship" element={<Companionship/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;