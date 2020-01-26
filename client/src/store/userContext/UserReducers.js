import {
  signInValidator,
  signUpValidator
} from "../../utils/validators";

import {
  addAuthHeader,
  SIGNIN,
  SIGNUP
} from '../../services/auth'

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const RESTORE_CREDS = 'RESTORE_CREDS';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const saveCreds = (token, userHandle, history) => {
  localStorage.setItem('idToken', token);
  localStorage.setItem('userHandle', userHandle);
  history.push('/');
}

const clearError = (idx, state) => {
  const updates = state;
  
  updates.errors.splice(idx, 1);

  return {...updates};
}

const restoreCreds = state => {
  const updates = state;
  if(localStorage.idToken){
    // authenticate from server first
    updates.token = localStorage.idToken;
    updates.isAuth = true;
    updates.userHandle = localStorage.userHandle;
    addAuthHeader(updates.token);
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

  const response = await SIGNUP(userCreds);

  if(response.status === 400) updates.errors.push('Invalid Data. Please fill the forms properly');
  if(response.status === 406) updates.errors.push('User Handle already taken');
  if(response.status === 409) updates.errors.push('Email already exists');
  if(response.status === 500) updates.errors.push('Internal server error. Please try again later');
  
  if(updates.errors.length){
    return {...updates};
  }

  updates.token = response.idToken;
  updates.userHandle = response.user;
  
  saveCreds(updates.token, updates.userHandle, history);
  
  updates.isAuth = true;
  return {...updates};
}

const signIn = async ({ creds, history }, state) => {
  const updates = state;

  const userCreds = {
    email: creds.email,
    password: creds.password
  };

  updates.errors = signInValidator(userCreds);

  const response = await SIGNIN(userCreds);
  
  if(response.status === 400) updates.errors.push('Invalid Data. Please fill the forms properly');
  if(response.status === 404) updates.errors.push('Invalid Username or Password');
  if(response.status === 500) updates.errors.push('Internal server error. Please try again later');

  if(updates.errors.length){
    return {...updates};
  }

  updates.token = response.data?.idToken;
  updates.userHandle = response.data?.user;
  
  saveCreds(updates.token, updates.userHandle, history);

  updates.isAuth = true;
  return {...updates};
}

const signOut = state => {
  const updates = state;
  localStorage.removeItem('idToken');
  localStorage.removeItem('userHandle');
  updates.isAuth = false;
  updates.token = '';
  return {...updates};
}

export const UserReducer = async (state, action) => {
  switch(action.type) {
    case CLEAR_ERROR:
      return clearError(action.idx, state);
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