import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Comments from './components/Comments';
import Signin from './components/Signin';
import Signup from './components/Signup';
import About from './components/About';
import User from './components/User';
import Edit from './components/Edit';

function App(){
  
  return(
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/about' exact component={About} />
        <Route path='/:user' exact component={User} />
        <Route path='/edit/:type/:id' exact component={Edit} />
        <Route path='/comments/:id' exact component={Comments} />
      </Switch>
    </Router>
  )
}

export default App;
