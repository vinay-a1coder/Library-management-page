import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupPage.css';
// import { Inside } from '../inside/Inside';
// import {Home} from "../home/Home"

export const SignupPage = () => {
    const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSignup = event => {
    event.preventDefault();
    // Handle signup logic here
    localStorage.setItem('loggedin', 'true');
    history.push('../home/HomePage');
    // history.push(<Inside />)
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

// export default SignupPage;
