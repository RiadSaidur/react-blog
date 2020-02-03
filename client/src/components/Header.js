import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../store/userContext/UserContext';
import '../stylesheets/Header.css'

import login from '../assets/login.png'
import add from '../assets/add.png'
import logout from '../assets/logout.png'
import info from '../assets/information.png'

const Header = () => {
  const { user: { isAuth }, signOut, restoreCreds } = useContext(UserContext)

  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => setShowMenu(!showMenu)

  useEffect(() => {
    if(localStorage.idToken && localStorage.userHandle) restoreCreds();
    // eslint-disable-next-line
  }, [])

  return(
    <header className='header'>
        <div>
          <Link to='/p/newpost'><h1>+</h1></Link>
          {!isAuth && <Link to='/signin'><img src={login} alt="sign in"/></Link>}
          {!isAuth && <Link to='/signup'><img src={add} alt="sign up"/></Link>}
        </div>

        <Link to='/' className="home"><h1>pb</h1></Link>

        <div>
          {isAuth && <Link to='/' onClick={signOut}><img src={logout} alt="sign out"/></Link>}
          <Link to='/about'><img src={info} alt="about"/></Link>
          <button onClick={toggle} className='expand'>></button>
        </div>
    </header>
  )
}

export default Header;