import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../store/userContext/UserContext';

import NavLinks from './NavLinks';
import UserLinks from './UserLinks';

import '../stylesheets/Header.css'

const Header = () => {
  const { restoreCreds } = useContext(UserContext);
  useEffect(() => {
    if(localStorage.idToken) restoreCreds();
    // eslint-disable-next-line
  }, []);
  return (
    <UserContext.Consumer>{ ({ user: { isAuth } }) => {
      return(
        <div className='header'>
          <Link to='/'><h1>pixxelbook</h1></Link>
          { !isAuth && <NavLinks /> }
          { isAuth && <UserLinks /> }
        </div>
      )
    }}</UserContext.Consumer>
  )
}

export default Header;