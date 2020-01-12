const isEmail = email => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const signupValidator = user => {
  if(
    !isEmail(user.email) ||
    user.password != user.confirmPassword ||
    user.password.length < 8 ||
    user.password.length > 20 ||
    user.handle.trim() === '' ||
    user.handle.length < 3 ||
    user.handle.length > 20
  ) return false;
  return true;
}

const signinValidator = user => {
  if(
    !isEmail(user.email) ||
    user.password.length < 8 ||
    user.password.length > 20 
  ) return false;
  return true;
}

module.exports = {
  signupValidator,
  signinValidator
}