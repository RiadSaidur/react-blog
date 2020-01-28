const isEmail = email => {
  // eslint-disable-next-line
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

export const signUpValidator =  creds => {
  let errors = [];

  if(!isEmail(creds.email)) errors.push('invalid Email');
  if(creds.handle.length < 3) errors.push('User Handle must be at least 3 characters');
  if(creds.password.length < 8) errors.push('Password must be at least 8 characters');
  if(creds.password !== creds.confirmPassword) errors.push('Passwords must match');

  return errors;
}

export const signInValidator =  creds => {
  let errors = [];

  if(!isEmail(creds.email)) errors.push('invalid Email');
  if(creds.password.length < 8) errors.push('Password must be at least 8 characters');

  return errors;
}

export const isEmpty = body => !body.trim().length