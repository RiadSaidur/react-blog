import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Signin.css'

function Signin(){
  const formHandler = event => {
    event.preventDefault();
    event.persist();
    const user = {
      email: event.target.elements[0].value,
      password: event.target.elements[1].value
    }
    console.table(user);
  };
  return(
    <div className="sign-container">
      <div className="contents nu-elevate-card">
        <h2>Sign In</h2>
        <div className="form">
          <form onSubmit={formHandler}>
            <input type="email" placeholder="Email" className="nu-elevate-cta"/>
            <input type="password" placeholder="Password" className="nu-elevate-cta"/>
            <input type="submit" value="Sign In" className="nu-elevate-cta cta"/>
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