import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Signin.css'
import UserContext from '../store/userContext/UserContext';
import Errors from '../components/Errors';

function Signin({ history }){
  const [signStatus, setSignStatus] = useState(false)

  const { signIn, clearError, user: { errors } } = useContext(UserContext);

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
    <div className="signin_container">
      <div className='signin_deco'>
        <img src={require('../assets/signIn.svg')} alt=''/>
        <h2>Enter the World of Joy</h2>
      </div>

      <div className="signin_contents">
        <h3>WELCOME BACK</h3>
        <p>Fun awaits for you</p>

        <Errors errors={errors} clearError={clearError} />

        <div className="signin_form">
          <form onSubmit={formHandler}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" />
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" />
            <button
              disabled={signStatus}
              type="submit"
              className="signin_cta"
            >{signStatus ? 'Signin In ...' : 'Sign In'}</button>
          </form>
        </div>

        <div className="signin_options">
          <p>Not a Member? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signin;