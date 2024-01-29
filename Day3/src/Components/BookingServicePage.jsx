// BookingServicePage.jsx
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingServicePage.css';

const BookingServicePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for submitting the form data
    console.log('Booking Details:', { selectedDate, selectedTime, customerDetails });
  };

  return (
    <div>
        <div style={{backgroundColor:"black", marginTop:"-1.5%",padding:"10px 0px 0px 0px"}} className="hcontianer">
        <div className="header">
          <div className="booksub2">
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
    <div className="booking-service-container">
      <h2>Book Services</h2><br/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <select value={selectedTime} onChange={handleTimeChange} required>
            <option value="" disabled>
              Select a time
            </option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={customerDetails.name} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={customerDetails.email} onChange={handleInputChange} required />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" value={customerDetails.phone} onChange={handleInputChange} required />
        </div>
<center>
        <button type="submit">Book Service</button></center>
      </form>
    </div>
    </div>
  );
};

export default BookingServicePage;
