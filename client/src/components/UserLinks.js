import React from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../store/userContext/UserContext';

const UserLinks = () => {
  console.log('UserLinks')
  return (
    <UserContext.Consumer>{ ({ signOut }) => {
      return (
        <div>
          <ul className='nav-links'>
            <Link to='/' onClick={signOut}><li>Log Out</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
        </div>
      )
    }}</UserContext.Consumer>
  )
}

export default UserLinks;