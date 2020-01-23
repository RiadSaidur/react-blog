import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Signin.css'
import UserContext from '../store/userContext/UserContext';

function Signin({ history }){
  console.log('Signin')
  return(
    <UserContext.Consumer>{ ({ signIn }) => {
      const formHandler = async event => {
        event.preventDefault();
        event.persist();
        const creds = {
          email: event.target.elements[0].value,
          password: event.target.elements[1].value
        }
        const payload = { creds, history };
        signIn(payload);
      };
      return (
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
    }}</UserContext.Consumer>
  )
}

export default Signin;