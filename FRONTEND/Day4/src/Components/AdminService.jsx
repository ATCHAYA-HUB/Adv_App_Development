// AdminService.jsx
import { useState } from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
const AdminService = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    serviceName: '',
    payment: '',
    serviceType: '', // Updated to include serviceType in the form data
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.serviceName || !formData.payment || !formData.serviceType || !formData.description) {
      alert('Please fill in all fields.');
      return;
    }

    const newService = {
      id: Date.now(),
      serviceName: formData.serviceName,
      payment: formData.payment,
      serviceType: formData.serviceType,
      description: formData.description,
    };

    setServices((prevServices) => [...prevServices, newService]);
    setFormData({
      serviceName: '',
      payment: '',
      serviceType: '',
      description: '',
    });
  };

  const handleDeleteService = (id) => {
    setServices((prevServices) => prevServices.filter((service) => service.id !== id));
  };

  return (
    <div>
      <div className="adheader" >
          <div className="adsub2">
            <ul className='adulh'>
                <li>Home</li>
                <li>Partners</li>
                <li>Services</li>
                <li>Log Out</li>
            </ul>
          </div>
        </div>
    <div className="admin-service-container">
      
      <h1 style={{paddingLeft:"120px"}}>Admin Services</h1>
      <form onSubmit={handleFormSubmit} className='Adminform'>
        <label style={{paddingTop:"30px"}}>
          Service Name:
          <input type="text" placeholder="Service Name" name="serviceName" value={formData.serviceName} onChange={handleInputChange} />
        </label>
        <label>
          Payment:
          <input type="number" placeholder="Enter Amount"name="payment" value={formData.payment} onChange={handleInputChange} />
        </label>
        <label>
          Service Type:{' '}
          <select style={{width:"200px",height:"30px",paddingLeft:"30px",marginLeft:"10px"}}name="serviceType" value={formData.serviceType} onChange={handleInputChange}>
            <option value="">Select Service Type</option>
            <option value="skilled-nursing">Skilled Nursing</option>
            <option value="personal-care">Personal Care</option>
            <option value="medication-management">Medication Management</option>
            <option value="physical-therapy">Physical Therapy</option>
            <option value="companionship">Companionship</option>
          </select>
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </label>
        <button className='buttonser' type="submit" style={{backgroundColor:"#3498db"}}>Add Service</button>
      </form>

      <div className="service-list">
        <h2>Services List</h2>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <strong>{service.serviceName}</strong> - {service.payment} - {service.serviceType}
              <p>{service.description}</p>
              <button onClick={() => handleDeleteService(service.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AdminService;
