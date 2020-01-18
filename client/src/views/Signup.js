import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../store/userContext/UserContext';

function Signin(){
  return(
    <UserContext.Consumer>{ ({ signUp }) => {
      const formHandler = event => {
        event.preventDefault();
        event.persist();
        const creds = {
          handle: event.target.elements[0].value,
          email: event.target.elements[1].value,
          password: event.target.elements[2].value,
          repeatPassword: event.target.elements[3].value
        }
        signUp(creds);
      };
      return (
        <div className="sign-container nu-elevate-card contents">
          <h2>Sign Up</h2>
          <form onSubmit={formHandler} className="form">
          <input type="text" placeholder="user handle" className="nu-elevate-card"/>
            <input type="email" placeholder="Email" className="nu-elevate-card"/>
            <input type="password" placeholder="Password" className="nu-elevate-card"/>
            <input type="password" placeholder="Repeat Password" className="nu-elevate-card"/>
            <input type="submit" value="Sign Up" className="nu-elevate-card cta"/>
          </form>
          <p className="sign-options">Alredy have an account? <Link to="/signin">Sign In</Link> instead!</p>
        </div>
      )
    }}</UserContext.Consumer>
  )
}

export default Signin;