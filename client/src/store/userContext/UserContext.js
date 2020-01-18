import React from 'react'

export default React.createContext({
  isAuth: false,
  userHandle: '',
  errors: [],
  signUp: creds => {},
  signIn: creds => {},
  signOut: creds => {}
});