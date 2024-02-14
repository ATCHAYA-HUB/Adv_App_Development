// AboutUs.jsx
// import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import video from '../Images/video1.mp4';
const Homepage = () => {
  
  const statistics = {
    eldersEmpowered: 60000,
    panIndia: 'PAN India',
    operated: '500+',
    livesSaved: '4000+',
    eventsOrganized: '4000+',
  };
  const services = [
    {
      title: 'Oxygen Cylinder',
      description: 'Ensure peace of mind and safety for seniors with our home oxygen cylinder service, delivering reliable and convenient access to life-enhancing oxygen therapy in the comfort of their own homes.',
    },
    {
      title: 'BP Instruments',
      description: 'Empowering seniors to monitor their health with precision and ease through our user-friendly BP Instruments for at-home care.',
    },
    {
      title: 'Glucometer',
      description: 'GlucoGuard HomeCare: Your Trusted Companion for Effortless Blood Glucose Monitoring, Ensuring Seniors Well-being with Precision and Convenience.',
    },
    {
      title: 'Pulse Oximeter',
      description: 'Empowering seniors with peace of mind by providing a reliable Pulse Oximeter for monitoring oxygen levels from the comfort of home.',
    },
    {
      title: 'Ambu Bag with Mask',
      description: 'Providing peace of mind and immediate respiratory support, it ensures seniors receive expert assistance, promoting their well-being and comfort.',
    },
    {
      title: 'Gun Thermometer',
      description: 'GuardianCare Duo: Your all-in-one solution for homecare, featuring a smart gun thermometer, ensuring the well-being and safety of seniors with advanced health monitoring.',
    },
    {
      title: 'Digital Thermometer',
      description: 'A digital thermometer with an integrated mask for precise health monitoring, ensuring the well-being and safety of seniors in the comfort of their homes.',
    },
    {
      title: 'Hearing aids',
      description: 'Enhance the joy of connection with our innovative hearing aids integrated with mask-friendly technology, with clear communication and improved quality of life in the comfort of their homes.',
    },
  ];

  return (
    <div>
      <div className="header" style={{ backgroundColor: "#16142e", height: "50px", paddingTop: "10px", marginTop: "0px" }}>
        <div className="sub2">
          <ul className='ulh'>
            <li className='homeli'>Home</li>
            <Link to="/Serviceuser"><li className='homeli'>All Services</li></Link>
            <Link to="/Profile"><li className='homeli'>Profile</li></Link>
            <Link to="/Topservices"><li className='homeli'>About</li></Link>
          </ul>
        </div>
      </div>
     <video autoPlay loop muted playsInline className="css-1adt0p6">
  <source src={video} type="video/mp4" />
</video>


      <div className="about-us-container">
        <h1  className="fonthome" style={{fontSize:"60px",position:"absolute",marginTop:"-570px",color:"white",paddingLeft:"17px"}}>Elder Vista⁠⁠⁠⁠⁠✨</h1>
        <p style={{position:"absolute",marginTop:"-475px",color:"white"}}>
        Embracing the warmth of home, our care goes beyond walls. Providing companionship, comfort, and compassionate support, we transform houses into havens for 
        cherished moments. Your journey of aging gracefully begins with personalized care at every step. Welcome to a place where love resides and independence thrives.
        </p>
        <section className="statistics-section">
          <h2 className="fonthome1" style={{color:"white"}}>Our Achievements</h2>
          <div className='abbg'>
          <div className="statistics-grid">
            {Object.entries(statistics).map(([label, value]) => (
                <div key={label} className="statistic-item">
                <div className="statistic-value">{value}</div>
                <div className="statistic-label">{label}</div>
              </div>
            ))}
          </div></div>
        </section><br/>
        <section className="contact-section">
      <Link to="/Serviceuser"> <h2 style={{
  color: "#e94263",
  textAlign: "center",
  fontSize: "30px",
  paddingBottom: "5px",
  boxShadow: "0 0 5px rgb(255, 165, 165)",
  width: "500px",
  margin: "0 auto",paddingTop:"7px",
  borderRadius:"8px",
  backgroundColor:"rgb(251, 239, 239)",
  transition: "transform 0.3s",
  cursor: "pointer"
}}
  onMouseOver={(e) => { e.target.style.transform = 'scale(1.1)'; }}
  onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; }}
>
  View All services!
</h2>   </Link>        
        </section>

        <section className="partners-section">
          <h2>Our Partners</h2>
          <p style={{marginLeft:"-18px",paddingTop:"10px"}}>
            We collaborate with trusted partners to deliver high-quality healthcare services to our users.
          <br></br>1.SeniorCare Connect <br/>2.ComfortCare Hub<br/> 3.SereneHome Aid <br/>4.WisdomWell HomeCare<br/>
5.GuardianGrove Senior Support</p>
        </section>
      
        <section className="services-section">
          <h2>Services include:-</h2>
          <div className="services-grid">
            {services.map(({ title, description }) => (
              <div key={title} className="service-item">
                <div className="service-details">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
