import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Signin.css'
import UserContext from '../store/userContext/UserContext';
import Errors from '../components/Errors';

function Signin({ history }){
  const [signStatus, setSignStatus] = useState(false)

  const { signIn } = useContext(UserContext);

  const formHandler = async event => {
    event.preventDefault();
    event.persist();
    const creds = {
      email: event.target.elements[0].value,
      password: event.target.elements[1].value
    }
    event.target.elements[1].value = ''
    const payload = { creds, history };
    setSignStatus(true);
    await signIn(payload);
    setSignStatus(false);
  };

  return (
    <div className="sign-container">
      <div className="contents nu-elevate-card">
        <h2>Sign In</h2>
        <Errors />
        <div className="form">
          <form onSubmit={formHandler}>
            <input type="email" placeholder="Email" className="nu-elevate-cta"/>
            <input type="password" placeholder="Password" className="nu-elevate-cta"/>
            <input
              disabled={signStatus}
              type="submit"
              value={signStatus ? 'Signin In ...' : 'Sign In'}
              className="nu-elevate-cta cta"
            />
          </form>
          <div className="sign-options">
            <p>Forgot Password?</p>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;