import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './stylesheets/App.css';

import Header from './components/Header';
import Home from './views/Home';
import Comments from './views/Comments';
import Signin from './views/Signin';
import Signup from './views/Signup';
import About from './views/About';
import User from './views/User';
import Edit from './views/Edit';
import TaggedPost from './views/TaggedPost';

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
        <Route path='/p/:tag' exact component={TaggedPost} />
        <Route path='/edit/:type/:id' exact component={Edit} />
        <Route path='/comments/:id' exact component={Comments} />
      </Switch>
    </Router>
  )
}

export default App;
