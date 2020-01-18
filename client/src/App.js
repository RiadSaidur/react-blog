import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './stylesheets/App.css';

import UserState from './store/userContext/UserState';
import PostState from './store/postContext/PostState';
import CommentState from './store/commentContext/CommentState';

import Header from './components/Header';
import Home from './views/Home';
import Comments from './views/Comments';
import Signin from './views/Signin';
import Signup from './views/Signup';
import About from './views/About';
import User from './views/User';
import TaggedPost from './views/TaggedPost';
import NewPost from './views/NewPost';
import EditComment from './views/EditComment';
import EditPost from './views/EditPost';

function App(){
  
  return(
    <UserState>
      <PostState>
        <CommentState>
          <Router>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signin' exact component={Signin} />
              <Route path='/signup' exact component={Signup} />
              <Route path='/about' exact component={About} />
              <Route path='/:user' exact component={User} />
              <Route path='/p/newpost' exact component={NewPost} />
              <Route path='/p/:tag' exact component={TaggedPost} />
              <Route path='/edit/post/:id/' exact component={EditPost} />
              <Route path='/edit/comment/:id/:key' exact component={EditComment} />
              <Route path='/comments/:id' exact component={Comments} />
            </Switch>
          </Router>
        </CommentState>
      </PostState>
    </UserState>
  )
}

export default App;
