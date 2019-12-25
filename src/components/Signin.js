import React from 'react';

function Signin(){
  const formHandler = event => {
    event.preventDefault();
    event.persist();
    const user = {
      email: event.target.elements[0].value,
      password: event.target.elements[1].value
    }
    console.table(user);
  };
  return(
    <div className="signIn-container">
      <button>Sign Up</button>
      <h1>Sign In</h1>
      <form onSubmit={formHandler}>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="submit" value="Sign In"/>
      </form>
      <p>Forgot Password?</p>
      <p>Don't have an account? Sign Up now!</p>
    </div>
  )
}

export default Signin;