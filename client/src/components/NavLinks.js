import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../store/userContext/UserContext'

const NavLinks = ({ toggle }) => {
  const { user: { isAuth }, signOut } = useContext(UserContext)
  return (
    <nav>
      <ul className='nav_links' onClick={toggle}>
        
      </ul>
    </nav>
  )
}

export default NavLinks;