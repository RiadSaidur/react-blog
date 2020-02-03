import React, { useContext, useEffect } from 'react';

import Posts from '../components/Posts';

import '../stylesheets/Home.css'
import PostContext from '../store/postContext/PostContext';

function Home(){
  const { posts: { postsCollections }, setPosts, upvote, downvote } = useContext(PostContext);

  useEffect(() => {
    setPosts();
    // eslint-disable-next-line
  }, []);

  return(
    <div>
      <Posts posts={postsCollections} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default Home;