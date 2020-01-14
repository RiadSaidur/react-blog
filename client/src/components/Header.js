import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Header.css'

function Header (){
  return(
    <div className='header'>
      <Link to='/'><h1>pixxelbook</h1></Link>
      <ul className='nav-links'>
        <Link to='/signin'><li>Sign In</li></Link>
        <Link to='/signup'><li>Sign Up</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </div>
  )
}

export default Header;

