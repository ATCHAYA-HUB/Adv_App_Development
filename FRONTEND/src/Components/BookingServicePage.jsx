// BookingServicePage.jsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingServicePage.css';
import Profile from './Profile';
import { useEffect } from 'react';
const BookingServicePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [bookedServices, setBookedServices] = useState([]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      selectedDate,
      selectedTime,
      customerDetails,
    };

    setBookedServices((prevBookedServices) => [...prevBookedServices, newBooking]);

    console.log('Booking Details:', newBooking);

    setSelectedDate(new Date());
    setSelectedTime('');
    setCustomerDetails({
      name: '',
      email: '',
      phone: '',
    });
  };
  useEffect(() => {
    console.log('Booked Services in BookingServicePage:', bookedServices);
  }, [bookedServices]);  return (
    <div>
      <div style={{ backgroundColor: "black", marginTop: "-1.5%", padding: "20px 0px 0px 0px" }} className="hcontianer">
        <div className="header">
          <div className="booksub2">
            <ul className='ulh'>
              <li>Home</li>
              <li>Partners</li>
              <li>Profile</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="booking-service-container">
        <h2>Book Services</h2><br />
        <form onSubmit={handleBookingSubmit}>
          <div className="form-group">
            <label style={{ margin: "20px" }}>Date:</label>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
          </div>

          <div className="form-group">
            <label style={{ margin: "20px" }}>Time:</label>
            <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
              <option value="" disabled>
                Select a time
              </option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ margin: "20px" }}>Name:</label>
            <input type="text" name="name" value={customerDetails.name} onChange={(e) => setCustomerDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }))} required />
          </div>

          <div className="form-group">
            <label style={{ margin: "20px" }}>Email:</label>
            <input type="email" name="email" value={customerDetails.email} onChange={(e) => setCustomerDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }))} required />
          </div>

          <div className="form-group">
            <label style={{ margin: "20px" }}>Phone:</label>
            <input type="tel" name="phone" value={customerDetails.phone} onChange={(e) => setCustomerDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }))} required />
          </div>

          <center>
            <button style={{outline:"none"}} type="submit">Book Service</button></center>
        </form>
      </div>
      {/* Render the Profile component with booked services */}
      {bookedServices.length > 0 && <Profile bookedServices={bookedServices} />}
      
    </div>
  );
  
};
export default BookingServicePage;
