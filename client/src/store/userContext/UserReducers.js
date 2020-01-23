import {
  signInValidator,
  signUpValidator
} from "../../utils/validators";

import {
  SIGNIN,
  SIGNUP
} from '../../services/auth'

export const RESTORE_CREDS = 'RESTORE_CREDS';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const saveCreds = (token, history) => {
  localStorage.setItem('idToken', token);
  history.push('/');
}

const restoreCreds = state => {
  const updates = state;
  if(localStorage.idToken){
    // authenticate from server first
    updates.token = localStorage.idToken;
    updates.isAuth = true;
    console.log('authenticate from server first');
  }
  return {...updates};
}

const signUp = async ({ creds, history }, state) => {
  const updates = state;

  const userCreds = {
    email: creds.email,
    handle: creds.handle,
    password: creds.password,
    confirmPassword: creds.repeatPassword
  };

  updates.errors = signUpValidator(userCreds);
  
  if(updates.errors.length){
    console.log(updates.errors);
    return {...updates};
  }

  updates.token = await SIGNUP(userCreds);
  
  saveCreds(updates.token, history);
  
  updates.isAuth = true;
  console.log(updates);
  return {...updates};
}

const signIn = async ({ creds, history }, state) => {
  const updates = state;

  const userCreds = {
    email: creds.email,
    password: creds.password
  };

  updates.errors = signInValidator(userCreds);
  
  if(updates.errors.length){
    console.log(updates.errors);
    return {...updates};
  }

  updates.token = await SIGNIN(userCreds);
  
  saveCreds(updates.token, history);

  updates.isAuth = true;
  console.log(updates);
  return {...updates};
}

const signOut = state => {
  console.log('sign out');
  const updates = state;
  localStorage.removeItem('idToken', updates.token);
  updates.isAuth = false;
  updates.token = '';
  return {...updates};
}

export const UserReducer = async (state, action) => {
  switch(action.type) {
    case RESTORE_CREDS:
      return restoreCreds(state);
    case SIGN_UP:
      return signUp(action.payload, state);
    case SIGN_IN:
      return await signIn(action.payload, state);
    case SIGN_OUT:
      return signOut(state);
    default:
      return state;
  }
}