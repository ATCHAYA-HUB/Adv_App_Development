// AboutUs.jsx
// import React from 'react';
import './About.css';
import video from '../Images/video1.mp4';
const AboutUs = () => {
  const statistics = {
    eldersEmpowered: 60000,
    panIndia: 'PAN India',
    operated: '500+',
    livesSaved: '4000+',
    eventsOrganized: '4000+',
  };
  const services = [
    {
      title: 'Medical equipment & devices',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: video, // Replace with the actual image filename
    },
    {
      title: 'Elder tech',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'elder-tech.jpg', // Replace with the actual image filename
    },
    {
      title: 'Health support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'health-support.jpg', // Replace with the actual image filename
    },
    {
      title: 'Home health care',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'home-health-care.jpg', // Replace with the actual image filename
    },
    {
      title: 'Tele consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'tele-consultation.jpg', // Replace with the actual image filename
    },
    {
      title: 'Lab & diagnostics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'lab-diagnostics.jpg', // Replace with the actual image filename
    },
    {
      title: 'Convenience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'convenience.jpg', // Replace with the actual image filename
    },
    {
      title: 'Home services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'home-services.jpg', // Replace with the actual image filename
    },
  ];

  return (
    <div>
      <div className="header" style={{ backgroundColor: "#16142e", height: "50px", paddingTop: "10px", marginTop: "0px" }}>
        <div className="sub2">
          <ul className='ulh'>
            <li className='homeli'>Home</li>
            <li className='homeli'>Partners</li>
            <li className='homeli'>Profile</li>
            <li className='homeli'>Log Out</li>
          </ul>
        </div>
      </div>
     <video autoPlay loop muted playsInline className="css-1adt0p6">
  <source src={video} type="video/mp4" />
</video>


      <div className="about-us-container">
        <h1 style={{fontSize:"60px",position:"absolute",marginTop:"-570px",color:"white",paddingLeft:"20px"}}>About Us</h1>
        <p style={{position:"absolute",marginTop:"-475px",color:"white"}}>
          As the global population continues to age, the need for healthcare solutions for senior citizens is on the rise.
          Our mission is to provide a user-friendly and secure web-based application that caters to the unique needs of seniors.
          We aim to create a centralized platform connecting seniors, caregivers, and qualified healthcare providers.
          This platform will address inefficiencies, miscommunications, and difficulties in matching seniors with suitable healthcare providers.
          Our dedicated system will streamline appointment scheduling, facilitate real-time communication, and enhance service coordination,
          providing a comprehensive solution for seniors and their caregivers.
        </p>
        <section className="statistics-section">
          <h2 style={{color:"white"}}>Our Achievements</h2>
          <div className='abbg'>
          <div className="statistics-grid">
            {Object.entries(statistics).map(([label, value]) => (
              <div key={label} className="statistic-item">
                <div className="statistic-value">{value}</div>
                <div className="statistic-label">{label}</div>
              </div>
            ))}
          </div></div>
        </section>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p style={{marginLeft:"-18px",paddingTop:"10px"}}>
            Feel free to reach out to us for any inquiries or assistance. We are here to help!
          </p>
          <address>
            Email: <a href="mailto:info@example.com">info@example.com</a><br />
            Phone: +1 (123) 456-7890<br />
            Address: 123 Street, City, Country
          </address>
        </section>

        <section className="partners-section">
          <h2>Our Partners</h2>
          <p style={{marginLeft:"-18px",paddingTop:"10px"}}>
            We collaborate with trusted partners to deliver high-quality healthcare services to our users.
          <br></br>Partner 1 Partner 2 Partner 3</p>
        </section>
        <section className="services-section">
          <h2>How We Help</h2>
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

export default AboutUs;
