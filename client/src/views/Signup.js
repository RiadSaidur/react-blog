import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../store/userContext/UserContext';
import Errors from '../components/Errors';

import signUpDeco from '../assets/signUp.svg'

// require('../assets/signUp.svg')

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
    <div className="signin_container">
      <div className="signin_deco">
        <img src={signUpDeco} alt=""/>
        <h2>Where fun meets creativity</h2>
      </div>

      <div className='signin_contents'>
        <h3>WELCOME ABOARD</h3>
        <p>We are happy to have you</p>

        <Errors errors={errors} clearError={clearError} />

        <form onSubmit={formHandler} className="signin_form">
          <label htmlFor='user'>User Handle</label>
          <input id='user' type="text" />
          <label htmlFor="email">Email</label>
          <input id='email' type="email" />
          <label htmlFor="password">Password</label>
          <input id='password' type="password" />
          <label htmlFor="repeat">Repeat Password</label>
          <input id='repeat' type="password" />
          <button 
            disabled={signStatus}
            type="submit"
            className="signin_cta"
          >{signStatus ? 'Signin Up ...' : 'Sign Up'}</button>
        </form>

        <div className="signin_options">
          <p>Alredy have an account? <Link to="/signin">Sign In</Link> instead!</p>
        </div>
      </div>
    </div>
  )
}

export default Signin;