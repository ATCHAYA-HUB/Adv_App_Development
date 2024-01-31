import './SignUp.css';
import Signup1 from '../Images/Signup.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!emailError && !passwordError) {
      // Your form submission logic here
      console.log('Form submitted:', { email, password });

      // Navigate to the next page
      navigate('/Home'); // Replace '/' with the actual path of the next page
    } else {
      console.log('Form contains errors. Please fix them.');
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
                      Don't have an account?{' '}
                      <Link to="/Login">
                        <label htmlFor="flip">Sign Up</label>
                      </Link>
                    </div>
                    <div className="text sign-up-text" style={{fontSize:"18px",paddingTop:"20px",marginBottom:"-30px"}}>
                      <Link to="/LoginAdmin">
                        <label htmlFor="flip">LOGIN</label>
                      </Link>
                      {' '}as ADMIN{' '}
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

export default Signup;
