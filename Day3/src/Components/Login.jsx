import './Login.css';
import { useState } from 'react';
import Signup from '../Images/Signup.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
  };
  const validatePassword = () => {
    setPasswordError(password.length >= 6 ? '' : 'Password must be at least 6 characters');
  };

  const validatePhone = () => {
    const phoneRegex = /^\d+$/;
    setPhoneError(phoneRegex.test(phone) ? '' : 'Phone number should contain only digits');
  };

  const validateName = () => {
    setNameError(name.length > 2 ? '' : 'Name should contain more than 2 letters');
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before submission
    validateEmail();
    validatePassword();
    validatePhone();
    validateName();

    // If there are no errors, proceed with submission logic
    if (!emailError && !phoneError && !nameError && !passwordError) {
      // Your form submission logic here
      console.log('Form submitted:', { email, phone, name, password });
    } else {
      console.log('Form contains errors. Please fix them.');
    }
  };
  return (
    <div>
        <body className='lloginboby'>
  <div className="lcontainer">
    {/* <input type="checkbox" id="lflip"/> */}
    <div className="lcover">
        <img src={Signup} alt=""/>
      
    </div>
    <div className="lforms">
        <div className="lform-content">
        <div className="lsignup-form">
          <div className="ltitle">Signup</div>
        <form action="#">
            <div className="linput-boxes">
              <div className="linput-box">
                <i className="lfas fa-user"></i>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} onBlur={validateName} placeholder="Enter your name" required/>{nameError&&<div className='lerror-message'>{nameError}</div>}
              </div>
              <div className="linput-box">
                <i className="lfas fa-envelope"></i>
                <input type="text"  value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail} placeholder="Enter your email" required/>
                         {emailError && <div className="lerror-message">{emailError}</div>}
              </div>
              <div className="linput-box">
                <i className="lfas fa-lock"></i>
                <input type="password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validatePassword} placeholder="Enter your password" required/>
                        {passwordError && <div className="lerror-message">{passwordError}</div> }

              </div>
              <div className="linput-box">
                <i className="lfas fa-lock"></i>
                <input type="tel"  value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={validatePhone} placeholder="Enter Phone No" required/> 
                        {phoneError && <div className="lerror-message">{phoneError}</div>}

              </div>
              <div className="button input-box">
                <input style={{border:"none"}}type="submit" value="Submit"/>
              </div>
              <div className="ltext lsign-up-text">Already have an account? <Link to="/"><label htmlFor="flippp">Login now</label></Link></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
</body>
    </div>
  )
}

export default Login