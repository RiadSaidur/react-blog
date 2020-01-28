import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../store/userContext/UserContext';
import Errors from '../components/Errors';

function Signin({ history }){
  const [signStatus, setSignStatus] = useState(false);

  const { signUp, clearError, user: { errors } } = useContext(UserContext);

  const formHandler = async event => {
    event.preventDefault();
    event.persist();
    const creds = {
      handle: event.target.elements[0].value,
      email: event.target.elements[1].value,
      password: event.target.elements[2].value,
      repeatPassword: event.target.elements[3].value
    }
    event.target.elements[2].value = ''
    event.target.elements[3].value = ''
    const payload = { creds, history };
    setSignStatus(true);
    await signUp(payload);
    setSignStatus(false);
  };
  
  return(
    <div className="sign-container nu-elevate-card contents">
      <h2>Sign Up</h2>
      <Errors errors={errors} clearError={clearError} />
      <form onSubmit={formHandler} className="form">
      <input type="text" placeholder="user handle" className="nu-elevate-card"/>
        <input type="email" placeholder="Email" className="nu-elevate-card"/>
        <input type="password" placeholder="Password" className="nu-elevate-card"/>
        <input type="password" placeholder="Repeat Password" className="nu-elevate-card"/>
        <input 
          disabled={signStatus}
          type="submit" 
          value={signStatus ? 'Signin Up ...' : 'Sign Up'}
          className="nu-elevate-card cta"
        />
      </form>
      <p className="sign-options">Alredy have an account? <Link to="/signin">Sign In</Link> instead!</p>
    </div>
  )
}

export default Signin;