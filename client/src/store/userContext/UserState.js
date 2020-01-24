import React from 'react'

import UserContext from './UserContext';

import {
  UserReducer,
  RESTORE_CREDS,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT
} from './UserReducers'

import useAsyncReducer from '../useAsyncReducer'

const UserState = props => {
  const user = {
    isAuth: false,
    token: '',
    userHandle: '',
    errors: []
  };

  const [ userState, dispatch ] = useAsyncReducer(UserReducer, user);

  const restoreCreds = () => dispatch({ type: RESTORE_CREDS });
  const signUp = payload => dispatch({ type: SIGN_UP, payload });
  const signIn = payload => dispatch({ type: SIGN_IN, payload });
  const signOut = () => dispatch({ type: SIGN_OUT });

  return (
    <UserContext.Provider value={{
      user: userState,
      restoreCreds,
      signUp,
      signIn,
      signOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;