import { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Serviceuser = () => {
  const [services, setServices] = useState([]);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/services', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <div className="adheader">
        <div className="adsub2">
          <ul className="adulh">
          <Link to="/Homepage"><li className='homeli'>Home</li></Link>
            <Link to="/Serviceuser"><li className='homeli'>All Services</li></Link>
            <Link to="/Profile"><li className='homeli'>Profile</li></Link>
            <Link to="/Topservices"><li className='homeli'>About</li></Link>
          </ul>
        </div>
      </div>
      <div className="admin-service-container">
        <h1 style={{ textAlign: 'center', fontWeight: '400' }}>All Services</h1>
        <div className="service-list" style={{ fontSize: "20px" }}>
          <h2 style={{ fontSize: "25px" }}>Services List</h2>
          <br />
          {services.map((service) => (
            <div key={service.id}>
              <br />
              <strong>{service.name}</strong> - ₹{service.price} - {service.provider}(Provider) <br /> {service.duration} hrs - AVAILABILITY ({service.availability}) -{' '}
              {service.noofdays} Days <br /><br />
              <Link
                to={{ pathname: "/BookingServicePage", state: { serviceTitle: service.name } }}
              >
                <button style={{ marginLeft: "10px", width: "150px", outline: "none", height: "50px" }}>Book Now</button>
              </Link>
              <br />
            </div>
          ))}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Serviceuser;
