// AboutUs.jsx
// import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div>
      <div className="header" style={{backgroundColor:"#16142e",height:"50px",paddingTop:"10px",marginTop:"0px"}}>
          <div className="sub2">
            <ul className='ulh'>
                <li>Home</li>
                <li>Partners</li>
                <li>Profile</li>
                <li>Log Out</li>
            </ul>
          </div>
        </div>
    <div className="about-us-container" >
      <h1>About Us</h1>
      <p>
        As the global population continues to age, the need for healthcare solutions for senior citizens is on the rise.
        Our mission is to provide a user-friendly and secure web-based application that caters to the unique needs of seniors.
        We aim to create a centralized platform connecting seniors, caregivers, and qualified healthcare providers.
        This platform will address inefficiencies, miscommunications, and difficulties in matching seniors with suitable healthcare providers.
      </p>
      <p>
        Our dedicated system will streamline appointment scheduling, facilitate real-time communication, and enhance service coordination,
        providing a comprehensive solution for seniors and their caregivers.
      </p>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
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
        <p>
          We collaborate with trusted partners to deliver high-quality healthcare services to our users.
        </p>
        {/* <ul> */}
          <p>Partner 1 Partner 2 Partner 3</p>
          
      </section>
    </div>
    </div>
  );
};

export default AboutUs;
