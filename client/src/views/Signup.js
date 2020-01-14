import React from 'react';

function Signin(){
  const formHandler = event => {
    event.preventDefault();
    event.persist();
    const user = {
      email: event.target.elements[0].value,
      password: event.target.elements[1].value,
      repeatPassword: event.target.elements[2].value,
      dob: event.target.elements[3].value
    }
    if(user.password !== user.repeatPassword) return alert('You dumb fuck');
    console.table(user);
  };
  return(
    <div className="sign-container nu-elevate-card contents">
      <h2>Sign Up</h2>
      <form onSubmit={formHandler} className="form">
        <input type="email" placeholder="Email" className="nu-elevate-card"/>
        <input type="password" placeholder="Password" className="nu-elevate-card"/>
        <input type="password" placeholder="Repeat Password" className="nu-elevate-card"/>
        <input type="text" placeholder="user handle" className="nu-elevate-card"/>
        <input type="submit" value="Sign In" className="nu-elevate-card cta"/>
      </form>
      <p className="sign-options">Alredy have an account? Sign In instead!</p>
    </div>
  )
}

export default Signin;