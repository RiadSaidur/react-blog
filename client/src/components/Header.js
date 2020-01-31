import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../store/userContext/UserContext';

import NavLinks from './NavLinks';

import '../stylesheets/Header.css'

const Header = () => {
  const { restoreCreds } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => setShowMenu(!showMenu)
  useEffect(() => {
    if(localStorage.idToken && localStorage.userHandle) restoreCreds();
    // eslint-disable-next-line
  }, []);
  return(
    <header className='header'>
      <div>
        <button onClick={toggle}><img src={require('../assets/menu.png')} alt='menu' /></button>
        <Link to='/'><h1>pixxelbook</h1></Link>
      </div>
      {showMenu && <NavLinks toggle={toggle}/>}
    </header>
  )
}

export default Header;