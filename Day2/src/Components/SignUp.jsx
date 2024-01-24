import './SignUp.css';
import Signup1 from '../Images/Signup.png'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
        <body className='SignUpbody'>
  <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
        <img src={Signup1} alt=""/>
      
    </div>
    <div className="forms">
        <div className="form-content">
        <div className="signup-form">
          <div className="title">Login</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
    
              <div className="button input-box">
              <Link to="/Home"><input style={{border:"none"}}type="submit" value="Submit"/></Link>
              </div>
              <div className="text sign-up-text">Dont have an account? <Link to="/Login"><label htmlFor="flip">Sign Up</label></Link></div>
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

export default Signup