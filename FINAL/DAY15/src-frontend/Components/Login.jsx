import './Login.css';
import Signup1 from '../Images/Signup.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate(); // Declare useNavigate here

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(email) ? '' : 'Invalid email address\u00A0\u00A0\u00A0');
  };
  const validatePassword = () => {
    setPasswordError(password.length >= 6 ? '' : 'Password must be at least 6 characters\u00A0\u00A0\u00A0');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password,
      });


      console.log(response.data);
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token',token);

      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        navigate('/Homeadmin');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/Homeadmin');
      } else {
        navigate('/Homepage');
      }
        } catch (error) {
      console.error('Login failed', error);
    }

  };

  return (
    <div>
      <body className='SignUpbody'>
        <div className="container">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <img src={Signup1} alt="" />
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="signup-form">
                <div className="title">Login</div>
                <form onSubmit={handleFormSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        placeholder="Enter your email"
                        required
                      />
                      {emailError && <div className="serror-message">{emailError}</div>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validatePassword}
                        placeholder="Enter your password"
                        required
                      />
                      {passwordError && <div className="serror-message">{passwordError}</div>}
                    </div>

                    {error && <div className="error-message">{error}</div>}
                    <div className="button input-box">
                      <input
                        style={{ border: "none" }}
                        type="submit"
                        value="Submit" onSubmit={handleFormSubmit}
                      />
                    </div>
                    <div className="text sign-up-text">
                      Already having an account?{' '}
                      <Link to="/Login">
                        <label htmlFor="flip">Sign Up</label>
                      </Link>
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

export default Login;

