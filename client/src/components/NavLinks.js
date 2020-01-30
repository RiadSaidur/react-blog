import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../store/userContext/UserContext'

const NavLinks = ({ toggle }) => {
  const { user: { isAuth }, signOut } = useContext(UserContext)
  return (
    <nav>
      <ul className='nav_links' onClick={toggle}>
        {!isAuth && <Link to='/signin'><li>Sign In</li></Link>}
        {!isAuth && <Link to='/signup'><li>Sign Up</li></Link>}
        {isAuth && <Link to='/' onClick={signOut}><li>Log Out</li></Link>}
        <Link to='/about'><li>About</li></Link>
      </ul>
    </nav>
  )
}

export default NavLinks;