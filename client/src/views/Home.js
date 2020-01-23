import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Posts from '../components/Posts';

import '../stylesheets/Home.css'
import PostContext from '../store/postContext/PostContext';

function Home(){
  const { posts, setPosts, upvote, downvote } = useContext(PostContext);

  useEffect(() => {
    setPosts();
    // eslint-disable-next-line
  }, []);

  return(
    <div className='container'>
      <button className='newpost-cta nu-elevate-cta'>
        <Link to='/p/newpost'><img src={require('../assets/feather-blue-book.svg')} alt="+ New Post"></img></Link>
      </button>
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default Home;