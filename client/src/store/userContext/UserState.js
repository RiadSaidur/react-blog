import React, { useReducer } from 'react'

import UserContext from './UserContext';

import {
  UserReducer,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT
} from './UserReducers'

const UserState = props => {
  const user = {
    isAuth: false,
    userHandle: 'saidur',
    errors: []
  };

  const [ userState, dispatch ] = useReducer(UserReducer, user);

  const signUp = creds => dispatch({ type: SIGN_UP, creds });
  const signIn = creds => dispatch({ type: SIGN_IN, creds });
  const signOut = () => dispatch({ type: SIGN_OUT });

  return (
    <UserContext.Provider value={{
      user: userState,
      signUp,
      signIn,
      signOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;