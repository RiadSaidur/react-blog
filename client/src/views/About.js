import React from 'react';

import '../stylesheets/About.css'

function Signin(){
  return(
    <div className="about-container">

      <h1>About</h1>

      <div className="description">
        <p>This is a Demo Blogging WebApp based on React.</p>
        <p>To visit <a target="blank" href="https://github.com/deathcrush/react-blog.git">The GitHub Repository</a> for this Blog WebApp click <a target="blank" href="https://github.com/deathcrush/react-blog.git">here</a>.</p>
        <div className="stack">
          <p>Library and Frameworks used in this WebApp:</p>
          <ul>
            <li>React</li>
            <li>React Router</li>
          </ul>
        </div>
      </div>

      <div className="license">
        <h4>This WebApp is developed for the purpose of learning React and is licensed under MIT</h4>
        <p>For more infromation about <a target="blank" href="https://github.com/deathcrush/react-blog/blob/master/LICENSE">License</a> click <a target="blank" href="https://github.com/deathcrush/react-blog/blob/master/LICENSE">here</a></p>
      </div>
      
    </div>
  )
}

export default Signin;