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
    <div className="signUp-container">
      <button>Sign In</button>
      <h1>Sign Up</h1>
      <form onSubmit={formHandler}>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Repeat Password"/>
        <input type="date"/>
        <input type="submit" value="Sign In"/>
      </form>
      <p>Alredy have an account? Sign In instead!</p>
    </div>
  )
}

export default Signin;