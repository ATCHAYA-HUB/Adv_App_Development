// SkilledNursingServices.jsx

// import React from 'react';
import { Link } from 'react-router-dom';
import './SkilledNurse.css'; // Import the corresponding CSS file
import nurse1 from '../Images/nurse1.jpg'
import nurse2 from '../Images/nurse2.jpg'
import nurse3 from '../Images/nurse3.jpg'
import nurse7 from '../Images/medi5.webp'
import nurse8 from '../Images/nurse11.jpg'
import nurse10 from '../Images/nurse13.jpg'
import nurse4 from '../Images/medi6.jpg'
import nurse5 from '../Images/medi1.jpg'
import nurse6 from '../Images/medi4.png'
import nurse9 from '../Images/nurse12.avif'
import nurse11 from '../Images/nurse14.avif'
const MedicationManagement = () => {
  // Define an array of services with images and descriptions
  const services = [
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse2,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse3, 
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse1,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse4,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse5,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse6,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse7,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse9,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse10,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse11,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: nurse8,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 1,
      title: 'Critical Care Nursing',
      image: 'https://img.freepik.com/premium-photo/painting-woman-nurse-talking_838754-3150.jpg?size=626&ext=jpg&ga=GA1.1.1906509331.1705941473&semt=ais_ai_generated', // Replace with the actual image file
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    }
    // Add more services with similar structures
  ];

  return (
    <div>
        <div style={{backgroundColor:"#1b0e37", marginTop:"-1.5%",padding:"20px 0px 0px 0px",width:"1267px"}} className="hcontianer">
        <div className="header">
          <div className="sub2">
            <ul className='ulh'>
                <Link to="/Home"><li>Home</li></Link>
                <Link to="/About"><li>About us</li></Link>
                <Link to="/Profile"><li>Profile</li></Link>
                <Link to="/"><li>Log Out</li></Link>
            </ul>
          </div>
        </div>
        </div>
        <br/>
        <center><h2 style={{fontSize:"40px"}}>MEDICATION MANAGEMENT</h2>
        <h2>MEDICATION ADHERENCE</h2></center>
    <div className="skilled-nursing-container">
      {services.map((service) => (
        <div key={service.id} className="service-box">
          <img src={service.image} alt={service.title} className="service-image" />
          <center><h2>{service.title}</h2>
          <p>{service.description}</p>
         <Link to="/BookingServicePage"> <button className="Buttonnurse" style={{outline:"none"}}>BOOK NOW</button></Link>
          </center>
        </div>
      ))}
    </div>
      </div>
  );
};

export default MedicationManagement;
