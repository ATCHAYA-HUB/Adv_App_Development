//import React from 'react'
import AboutUs from './Components/About';
import AdminServicesPage from './Components/AdminService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import BookingServicePage from './Components/BookingServicePage';
import SkilledNurse from './Components/SkilledNurse';
import MedicationManagement from './Components/MedicationManagement';
import PhysicalTherapy from './Components/PhysicalTherapy';
import Companionship from './Components/Companionship';
import Personalcare from './Components/Personalcare';
import Profile from './Components/Profile';
import LoginAdmin from './Components/Loginadmin';
import Homeadmin from './Components/Homeadmin';
const App = () => {

  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} /> 
          <Route path="/AdminService" element={<AdminServicesPage/>} /> 
          <Route path="/About" element={<AboutUs/>} /> 
          <Route path="/Login" element={<Login/>} />
          <Route path="/LoginAdmin" element={<LoginAdmin/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Homeadmin" element={<Homeadmin/>} />
          <Route path="/SkilledNurse" element={<SkilledNurse/>} />
          <Route path="/BookingServicePage" element={<BookingServicePage/>} />
          <Route path="/Personalcare" element={<Personalcare/>} />
          <Route path="/MedicationManagement" element={<MedicationManagement/>} />
          <Route path="/PhysicalTherapy" element={<PhysicalTherapy/>} />
          <Route path="/Companionship" element={<Companionship/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;