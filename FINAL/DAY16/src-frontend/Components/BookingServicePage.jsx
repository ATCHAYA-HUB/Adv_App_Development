import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingServicePage.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BookingServicePage = () => {
  const location = useLocation();
  const serviceName = location.state?.serviceName || '';
  const selectedType = location.state?.selectedType || '';
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [bookedServices, setBookedServices] = useState([]);
  const [weekDates, setWeekDates] = useState([]);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        date: selectedDate.toISOString().split('T')[0],
        servicetype: selectedService,
        username: customerDetails.name,
        email: customerDetails.email,
        phonenumber: customerDetails.phone,
      };

      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/booking', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Form submitted!', response.data);

      setSelectedDate(new Date());
      setSelectedService('');
      setCustomerDetails({
        name: '',
        email: '',
        phone: '',
      });

      setBookedServices((prevBookedServices) => [...prevBookedServices, response.data]);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const getPreviousWeekDates = (selectedDate) => {
    const currentDay = selectedDate.getDay();
    const startDate = new Date(selectedDate);
    startDate.setDate(selectedDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1));

    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });

    return dates;
  };

  useEffect(() => {
    setWeekDates(getPreviousWeekDates(selectedDate));
  }, [selectedDate]);

  const currentMonth = selectedDate.toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      <div style={{ backgroundColor: "#1b0e37", marginTop: "-1.5%", padding: "20px 0px 0px 0px", width: "1410px" }} className="hcontainer">
        <div className="header">
          <div className="booksub2">
            <ul className='ulh' style={{ marginLeft: "12px", marginTop: "-2px", paddingTop: "1px" }}>
            <Link to="/Homepage"><li className='homeli'>Home</li></Link>
            <Link to="/Serviceuser"><li className='homeli'>All Services</li></Link>
            <Link to="/Profile"><li className='homeli'>Profile</li></Link>
            <Link to="/Topservices"><li className='homeli'>About</li></Link>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="booking-service-container">
        <h2>Book Services</h2><br />
        <div className="date-boxes">
          {weekDates.map((date, index) => (
            <div key={index} className={`date-box ${date.getDate() === selectedDate.getDate() ? 'current-date' : ''}`} onClick={() => setSelectedDate(date)}>
              <p>{date.toLocaleDateString('en-US', { weekday: 'short' })}</p>
              <p>{date.getDate()}</p>
            </div>
          ))}
        </div>
        <div className="current-month">
          <p>{currentMonth}</p>
        </div>
        <form onSubmit={handleBookingSubmit}>
          <div className="form-group">
            <label style={{ margin: "20px" }}>Date:</label>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
          </div>

          <div className="form-group">
            <label style={{ margin: "14px" }}>Service:</label>
            <input type="text" name="service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required />
          </div>

          <div className="form-group">
            <label style={{ margin: "25px" }}>Name:</label>
            <input type="text" name="name" value={customerDetails.name} onChange={(e) => setCustomerDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }))} required />
          </div>

          <div className="form-group">
            <label style={{ margin: "24px" }}>Email:</label>
            <input type="email" name="email" value={customerDetails.email} onChange={(e) => setCustomerDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }))} required />
          </div>

          <div className="form-group">
            <label style={{ margin: "19px" }}>Phone:</label>
            <input type="tel" name="phone" value={customerDetails.phone} onChange={(e) => setCustomerDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }))} required />
          </div>

          <div className="selected-date-container">
            <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
          </div>

          <center>
            <button className="submitbutton" style={{ outline: "none" }} type="submit">Book Service</button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default BookingServicePage;
