import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [serviceData, setServiceData] = useState([]);
  const mailId = Cookies.get('mail');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found. Please log in again.');
          return;
        }

        const response = await axios.get('http://localhost:8080/booking', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setServiceData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteBooking = async (username) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete(`http://localhost:8080/booking/${username}`, config);

      console.log('Booking deleted!', response.data);

      // Update the booking list after deletion
      setServiceData((prevBookings) => prevBookings.filter((booking) => booking.username !== username));
    } catch (error) {
      console.error('Booking deletion failed:', error);
    }
  };

  const handleEditBooking = (username) => {
    // Navigate to the BookingServicePage with auto-filled data for the selected booking
    const selectedBooking = serviceData.find((booking) => booking.username === username);
    navigate(`/BookingServicePage/${username}`, { state: { bookingData: selectedBooking } });
  };

  return (
    <div className='prohome'>
      <div className="header" style={{ backgroundColor: "#16142e", height: "50px", paddingTop: "10px", marginTop: "0px", marginLeft: "-150px" }}>
        <div className="sub2">
          <ul className='ulh'>
            <Link to="/Homepage"><li className='homeli'>Home</li></Link>
            <Link to="/Serviceuser"><li className='homeli'>All Services</li></Link>
            <Link to="/Profile"><li className='homeli'>Profile</li></Link>
            <Link to="/Topservices"><li className='homeli'>About</li></Link>
          </ul>
        </div>
      </div>
      <div className='probg'>
        <div className='imgpro'></div>
        <div className='imgbcont'>
          <p>No matter how short the communication, any message meant to greet, engage, or connect with a new user is a welcome message.</p>
        </div>
        <p className='protitle'>MY PROFILE</p>
        <p style={{ marginTop: "10px", color: "rgb(102, 102, 102)" }}>Logged in as USER</p>
        <h2 className='redux'>
          {/* &nbsp;<br />User: {mailId} */}
        </h2><br />
        <div className='probox'>
          <h2>Booked Services</h2><br />
        <div className='feed'></div>
        <div style={{  backgroundColor: "red", color: "white", marginLeft: "920px", marginTop: "30px", width: "180px", height: "45px" }}>
          <Link to="/"><button style={{ width: "100%", height: "100%", border: "none", background: "red",outline:"none", color: "white", cursor: "pointer",marginTop:"250px" }}>Log out</button></Link>
        </div>
          {serviceData.map((service, index) => (
            <div key={index} className='service-box boxprofile'>
              <p>Name: {service.username}</p>
              <p>Selected Date: {service.date}</p>
              <p>Selected Service: {service.servicetype}</p><br/>
              <button onClick={() => handleDeleteBooking(service.username)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
