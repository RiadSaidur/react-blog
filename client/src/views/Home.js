import React from 'react';
import { Link } from 'react-router-dom';

import Posts from '../components/Posts';

import '../stylesheets/Home.css'
import PostContext from '../store/postContext/PostContext';

function Home(){
  return(
    <div className='container'>
      <button className='newpost-cta nu-elevate-cta'>
        <Link to='/p/newpost'><img src={require('../assets/feather-blue-book.svg')} alt="+ New Post"></img></Link>
      </button>
      <PostContext.Consumer>{ ({ posts, upvote, downvote }) => (
        <Posts posts={posts} upvote={upvote} downvote={downvote}/>
      )}</PostContext.Consumer>
    </div>
  )
}

export default Home;