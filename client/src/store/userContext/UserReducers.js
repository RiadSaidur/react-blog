export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const signUp = (creds, state) => {
  const updates = state;
  updates.errors = [];
  if(!isEmail(creds.email)) updates.errors.push('invalid Email');
  if(creds.handle.length < 3) updates.errors.push('User Handle must be at least 3 characters');
  if(creds.password.length < 8) updates.errors.push('Password must be at least 8 characters');
  if(creds.password != creds.repeatPassword) updates.errors.push('Passwords must match');
  if(updates.errors.length){
    console.log(updates.errors);
    return {...updates};
  }
  const userCreds = {
    email: creds.email,
    handle: creds.handle,
    password: creds.password,
    repeatPassword: creds.repeatPassword
  };
  console.log(userCreds);
  return {...updates};
}

const signIn = (creds, state) => {
  const updates = state;
  updates.errors = [];
  if(!isEmail(creds.email)) updates.errors.push('invalid Email');
  if(creds.password.length < 8) updates.errors.push('Password must be at least 8 characters');
  if(updates.errors.length){
    console.log(updates.errors);
    return {...updates};
  }
  const userCreds = {
    email: creds.email,
    password: creds.password
  };
  console.log(userCreds);
  updates.isAuth = true;
  return {...updates};
}

const signOut = state => {
  console.log('sign out');
  const updates = state;
  updates.isAuth = false;
  return updates;
}

export const UserReducer = (state, action) => {
  switch(action.type) {
    case SIGN_UP:
      return signUp(action.creds, state);
    case SIGN_IN:
      return signIn(action.creds, state);
    case SIGN_OUT:
      return signOut(state);
    default:
      return state;
  }
}