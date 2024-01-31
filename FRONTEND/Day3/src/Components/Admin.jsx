import { useState } from 'react';
import './Admin.css';
const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic (e.g., API request)
    // For simplicity, just call onSignup with username
    Admin(username);
  };

  return (
    <form>
      <div className="signupbg">
    <div>
      <h2>Signup</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Phone No:
        <input type="tel" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSignup}>Signup</button>
    </div>
    </div>
    </form>
  );
};

export default Admin;
