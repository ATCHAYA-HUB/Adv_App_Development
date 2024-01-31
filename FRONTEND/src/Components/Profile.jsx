// Profile.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; // Make sure to install MUI using npm or yarn
import Cookies from 'js-cookie'
import './Profile.css'
const Profile = () => {
  const user = "Your User"; // Replace with your user data
  const mailId = Cookies.get("mail"); // Make sure to include the 'js-cookie' library

  return (
    <div className='prohome'>
      <div className="header" style={{backgroundColor:"white",height:"50px",paddingTop:"10px",marginTop:"0px"}}>
          <div className="sub2">
            <ul className='ulh'>
                <li>Home</li>
                <li>Partners</li>
                <Link to="/Profile"><li>Profile</li></Link>
                <li>Log Out</li>
            </ul>
          </div>
        </div>
      <div className='probg'>
        <div className='imgpro'></div>
        <div className='imgbcont'>
          <p>No matter how short the communication, any message meant to greet, engage, or connect with a new user is a welcome message.</p>
        </div>
        <p className='protitle'>My Profile</p>
        <p style={{ marginLeft: "100px", marginTop: "10px", color: "rgb(102, 102, 102)" }}>Logged in as USER</p>
        <p className='redux'>
          &nbsp;<br />Name:&nbsp;{user}<br />Mail ID: {mailId}
        </p><br />
        <div className='probox'>
          <p>Book Services</p><br />
          <Link style={{ textDecoration: "none" }} to='/Workshop'>My Bookings</Link><br />
          <Link to="/">
            <Button variant='contained' style={{ backgroundColor: "red", color: "#ffffff", marginTop: "40px", marginLeft: "-100px", height: "40px" }} className='probtn'>
              Log Out
            </Button>
          </Link>
        </div>
        <div className='feed'></div>
      </div>
    </div>
  );
};

export default Profile;
