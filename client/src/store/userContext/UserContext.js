import React from 'react'

export default React.createContext({
  isAuth: false,
  token: '',
  userHandle: '',
  errors: [],
  clearError: idx => {},
  restoreCreds: () => {},
  signUp: creds => {},
  signIn: creds => {},
  signOut: () => {}
});