import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkilledNurse.css';
import nurse4 from '../Images/nurse6.avif';
import nurse5 from '../Images/nurse7.avif';
import nurse6 from '../Images/nurse8.avif';

const SkilledNurse = () => {
  const [selectedType, setSelectedType] = useState('individual');
  const [selectedDescription, setSelectedDescription] = useState('Expert nursing care for individual patients with critical medical needs.');
  const [selectedServiceName, setSelectedServiceName] = useState('Skilled Nursing');
  const [selectedServiceType, setSelectedServiceType] = useState('');

  const handleTypeChange = (type, description, serviceName) => {
    setSelectedType(type);
    setSelectedDescription(description);
    setSelectedServiceName(serviceName);
    setSelectedServiceType(type);
  };

  const services = [
    {
      id: 4,
      title: 'Super',
      image: nurse4,
      description: 'Expert nursing care for couple patients with critical medical needs.',
      price: '₹599',
      description1: '<li>Continuous monitoring at home.</li> <li>Access To Online Events</li><li>Emergency Doctor On Call</li><li>Customized care plans</li><br/><br/> ',
    },
    {
      id: 5,
      title: 'Elite',
      image: nurse5,
      description: 'Expert nursing care for couple patients with critical medical needs.',
      price: '₹5,999',
      description1: '<li>Continuous monitoring at home.</li> <li>Access To Online Events</li><li>Emergency Doctor On Call</li><li>Customized care plans</li> <li>24/7 availability</li><br/>',
    },
    {
      id: 6,
      title: 'Premium',
      image: nurse6,
      description: 'Expert nursing care for individual patients with critical medical needs.',
      price: '₹19,999',
      description1: '<li>Continuous monitoring at home.</li> <li>Access To Online Events</li><li>Emergency Doctor On Call</li><li>Customized care plans</li> <li>24/7 availability</li><li>Unlimited Doctor teleconsultation</li>',
    }
  ];

  return (
    <div>
      <div style={{ backgroundColor: "#1b0e37", marginTop: "-1.5%", padding: "20px 0px 0px 0px", width: "1410px" }} className="hcontianer">
        <div className="header">
          <div className="sub2">
            <ul style={{ marginRight: "46px", marginTop: "-1px" }} className='ulh'>
            <Link to="/Homepage"><li className='homeli'>Home</li></Link>
            <Link to="/Serviceuser"><li className='homeli'>All Services</li></Link>
            <Link to="/Profile"><li className='homeli'>Profile</li></Link>
            <Link to="/Topservices"><li className='homeli'>About</li></Link>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <center>
        <h2 style={{ fontSize: "40px" }}>Skilled Nursing</h2>
        <h2>Subacute Nursing & Acute Nursing</h2>
        <div style={{ marginTop: "30px", backgroundColor: "#e7e7e7", width: "400px", padding: "4px 0px 0px 0px", borderRadius: "30PX", height: "45px" }}>
          <button style={{ borderRadius: "30px", width: "193px", backgroundColor: selectedType === 'individual' ? 'white' : '#e7e7e7', color: selectedType === 'couple' ? 'black' : 'black', outline: "none", border: "none" }} onClick={() => handleTypeChange('individual', 'Expert nursing care for individual patients with critical medical needs. Continuous monitoring and support at home.', selectedServiceName)}>Individual</button>
          <button style={{ marginLeft: "5px", borderRadius: "30px", width: "193px", backgroundColor: selectedType === 'couple' ? 'white' : '#e7e7e7', color: selectedType === 'couple' ? 'black' : 'black', outline: "none", border: "none" }} onClick={() => handleTypeChange('couple', 'Expert nursing care for couple patients with critical medical needs. Continuous monitoring and support at home.', selectedServiceName)}>Couple</button>
        </div>
      </center>

      <div className="skilled-nursing-container">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <br />
            <img src={service.image} alt={service.title} className="service-image" />
            <center>
              <h2 style={{ fontWeight: "700", color: "#213547", textAlign: "start", paddingTop: "10px" }}>{service.title}</h2>
              <p style={{ color: "#213547", textAlign: "start", paddingTop: "10px" }}>{selectedDescription}</p>
              <p className='price'>{service.price}</p>
              <p style={{ textAlign: "start" }} dangerouslySetInnerHTML={{ __html: service.description1 }} />

              <Link to="/BookingServicePage">
                <button
                  className="Buttonnurse"
                  style={{ outline: "none" }}
                  onClick={() => handleTypeChange(selectedType, selectedDescription, service.title)}
                >
                  BOOK NOW
                </button>
              </Link>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkilledNurse;