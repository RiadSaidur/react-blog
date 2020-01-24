import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div>
      <ul className='nav-links'>
        <Link to='/signin'><li>Sign In</li></Link>
        <Link to='/signup'><li>Sign Up</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </div>
  )
}

export default NavLinks;