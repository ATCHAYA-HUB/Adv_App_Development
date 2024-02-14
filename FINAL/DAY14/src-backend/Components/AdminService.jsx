import { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AdminService = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    provider: '',
    duration: '',
    availability: '',
    noofdays: '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

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

      if (formData.name.trim() === '') {
        console.error('Service name is required.');
        return;
      }

      const existingService = services.find((service) => service.name === formData.name);

      if (existingService) {
        // Edit existing service
        const response = await axios.put(`http://localhost:8080/services/${formData.name}`, formData, config);
        console.log('Service edited!', response.data);
        setServices((prevServices) =>
          prevServices.map((service) =>
            service.name === formData.name ? { ...service, ...formData } : service
          )
        );
      } else {
        // Add new service
        const response = await axios.post('http://localhost:8080/services', formData, config);
        console.log('Service added!', response.data);
        setServices((prevServices) => [...prevServices, response.data]);
      }

      // Clear form data after submission
      setFormData({
        name: '',
        price: '',
        provider: '',
        duration: '',
        availability: '',
        noofdays: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const handleDeleteService = async (serviceName) => {
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

      const response = await axios.delete(`http://localhost:8080/services/${serviceName}`, config);

      console.log('Service deleted!', response.data);

      // Update the services list after deletion
      setServices((prevServices) => prevServices.filter((service) => service.name !== serviceName));
    } catch (error) {
      console.error('Service deletion failed:', error);
    }
  };

  const handleEditService = (service) => {
    setFormData({ ...service });
  };

  return (
    <div>
      <div className="adheader">
        <div className="adsub2">
          <ul className="adulh">
          <Link to="/Homeadmin"><li className='homeli'>Home</li></Link>
            <Link to="/Serviceuser"><li className='homeli'>All Services</li></Link>
            <Link to="/AdminService"><li className='homeli'>DashBoard</li></Link>
            <Link to="/Topservices"><li className='homeli'>About</li></Link>
          </ul>
        </div>
      </div>
      <div className="admin-service-container">
        <h1 style={{ textAlign: 'center', fontWeight: '400' }}>Admin Services</h1>
        <form onSubmit={handleFormSubmit} className='Adminform'>
          <label style={{ paddingTop: "30px" }}>
            Service Name:
            <input
              className='inputservice'
              style={{
                overflow: "hidden", outline: "none",
                width: "400px", marginLeft: "20px", backgroundColor: "transparent", borderBottom: "2px solid rgba(255,255,255,0.7)",
              }}
              type="text"
              placeholder="Service Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Payment:
            <input
              className='inputservice'
              style={{
                border: "none", outline: "none", width: "400px", marginLeft: "20px", backgroundColor: "transparent", borderBottom: "2px solid rgba(255,255,255,0.7)",
              }}
              type="number"
              placeholder="Enter Amount"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Provider:
            <input
              className='inputservice'
              style={{
                border: "none", outline: "none", width: "400px", marginLeft: "20px", backgroundColor: "transparent", borderBottom: "2px solid rgba(255,255,255,0.7)",
              }}
              type="text"
              placeholder="Enter Provider"
              name="provider"
              value={formData.provider}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Duration(hrs):
            <input
              className='inputservice'
              style={{
                border: "none", outline: "none", width: "400px", marginLeft: "20px", backgroundColor: "transparent", borderBottom: "2px solid rgba(255,255,255,0.7)",
              }}
              type="number"
              placeholder="Enter Duration"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Availability:
            <select
              style={{ width: "200px", height: "30px", paddingLeft: "30px", marginLeft: "10px", backgroundColor: "transparent", outline: "none", borderColor: "white" }}
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
            >
              <option value="">Select Availability</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            Number of Days:
            <input
              className='inputservice'
              style={{
                border: "none", outline: "none", width: "400px", marginLeft: "20px", backgroundColor: "transparent", borderBottom: "2px solid rgba(255,255,255,0.7)",
              }}
              type="number"
              placeholder="Enter Number of Days"
              name="noofdays"
              value={formData.noofdays}
              onChange={handleInputChange}
            />
          </label>
          <button className='buttonser' type="submit" style={{ backgroundColor: "white", outline: "none", width: "300px", margin: "auto", display: "block", color: "black" }}>Add Service</button>
        </form>

        <div className="service-list">
          <h2>Services List</h2>
          <br />
          {services.map((service) => (
            <div key={service.id}>
              <br />
              <strong>{service.name}</strong> - ₹{service.price} - {service.provider} <br /> {service.duration} hrs - AVAILABILITY ({service.availability}) -{' '}
              {service.noofdays} Days <br />
              <button style={{width:"70px",backgroundColor:"green",outline:"none",marginTop:"10px",height:"35px"}} onClick={() => handleEditService(service)}>Edit</button>
              <button style={{marginLeft:"10px",width:"70px",outline:"none",height:"35px"}}  onClick={() => handleDeleteService(service.name)}>Delete</button>
              <br />
            </div>
          ))}
          <br />
        </div>
      </div>
    </div>
  );
};

export default AdminService;
