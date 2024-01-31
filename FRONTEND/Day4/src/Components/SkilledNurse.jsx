// SkilledNursingServices.jsx

// import React from 'react';
import { Link } from 'react-router-dom';
import './SkilledNurse.css'; // Import the corresponding CSS file
// import nurse1 from '../Images/nurse1.jpg'
// import nurse2 from '../Images/nurse2.jpg'
// import nurse3 from '../Images/nurse3.jpg'
// import nurse7 from '../Images/nurse10.jpg'
// import nurse8 from '../Images/nurse11.jpg'
// import nurse10 from '../Images/nurse13.jpg'
import nurse4 from '../Images/nurse6.avif'
import nurse5 from '../Images/nurse7.avif'
import nurse6 from '../Images/nurse8.avif'
const SkilledNurse = () => {
  // Define an array of services with images and descriptions
  const services = [
    
    {
      id: 4,
      title: 'Critical Care Nursing',
      image: nurse4,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 5,
      title: 'Critical Care Nursing',
      image: nurse5,
      description: 'Expert nursing care for patients with critical medical needs. Continuous monitoring and support at home.',
    },
    {
      id: 6,
      title: 'Critical Care Nursing',
      image: nurse6,
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
        <center><h2 style={{fontSize:"40px"}}>Skilled Nursing</h2>
        <h2>Subacute Nursing & Acute Nursing</h2></center>
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

export default SkilledNurse;
