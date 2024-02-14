import './SignUp.css';
import { useState } from 'react';
import Signup from '../Images/Signup.png';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Invalid email address');
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    setPasswordError(passwordRegex.test(password) ? '' : 'Password must be at least 6 characters and include at least one special character');
    validateConfirmPassword();
  };

  const validateConfirmPassword = () => {
    setConfirmPasswordError(password === confirmPassword ? '' : 'Passwords do not match');
  };

  const validateName = () => {
    setNameError(name.length > 2 ? '' : 'Name should contain more than 2 letters');
  };

  Cookies.set('user', name);
  Cookies.set('mail', email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs before submission
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validateName();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name,
        email: email,
        password: password,
        confirmPassword:confirmPassword
      });

      console.log(response.data);
      navigate('/');

    } catch (error) {
      console.error('Signup failed', error);
    }

  };

  return (
    <div>
      <body className='lloginboby'>
        <div className="lcontainer">
          <div className="lcover">
            <img src={Signup} alt="" />
          </div>
          <div className="lforms">
            <div className="lform-content">
              <div className="lsignup-form">
                <div className="ltitle">Signup</div>
                <form action="#">
                  <div className="linput-boxes">
                    <div className="linput-box">
                      <i className="lfas fa-user"></i>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={validateName}
                        placeholder="Enter your name"
                        required
                      />
                      {nameError && <div className='lerror-message'>{nameError}</div>}
                    </div>
                    <div className="linput-box">
                      <i className="lfas fa-envelope"></i>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        placeholder="Enter your email"
                        required
                      />
                      {emailError && <div className="lerror-message">{emailError}</div>}
                    </div>
                    <div className="linput-box">
                      <i className="lfas fa-lock"></i>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validatePassword}
                        placeholder="Enter your password"
                        required
                      />
                      {passwordError && <div className="lerror-message">{passwordError}</div>}
                    </div>
                    <div className="linput-box">
                      <i className="lfas fa-lock"></i>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={validateConfirmPassword}
                        placeholder="Confirm Password"
                        required
                      />
                      {confirmPasswordError && <div className="lerror-message">{confirmPasswordError}</div>}
                    </div>
                    <div className="button input-box">
                      <input style={{ border: "none" }} type="submit" value="Submit" onClick={handleSubmit} />
                    </div>
                    <div className="ltext lsign-up-text">
                      Already have an account? <Link to="/"><label htmlFor="flippp">Login now</label></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default SignUp;
