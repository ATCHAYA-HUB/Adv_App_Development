// SkilledNursingServices.jsx

// import React from 'react';
import { Link } from 'react-router-dom';
import './SkilledNurse.css'; // Import the corresponding CSS file

import phy4 from '../Images/physical6.avif'
import phy5 from '../Images/physical1.jpg'
import phy6 from '../Images/physical3.jpg'

const PhysicalTherapy = () => {
  // Define an array of services with images and descriptions
  const services = [
    {
      id: 11,
      title: 'Critical Care Nursing',
      image: phy4,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 12,
      title: 'Critical Care Nursing',
      image: phy5,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 13,
      title: 'Critical Care Nursing',
      image: phy6,
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
                <li>Home</li>
                <li>Partners</li>
                <li>FAQs</li>
                <li>Log Out</li>
            </ul>
          </div>
        </div>
        </div>
        <br/>
        <center><h2 style={{fontSize:"40px"}}>PHYSICAL THREAPY</h2>
        <h2>PHYSIOTHERAPY & REHABILATION</h2></center>
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

export default PhysicalTherapy;
