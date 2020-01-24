import React, { useContext , useEffect} from 'react';

import Posts from '../components/Posts';
import PostContext from '../store/postContext/PostContext';

function User({ match }){
  const { posts, setPostsByUser, upvote, downvote } = useContext(PostContext);

  useEffect(() => {
    setPostsByUser(match.params.user);
    // eslint-disable-next-line
  }, []);
  
  return(
    <div className="user-container">
      <h2>Posts by { match.params.user }</h2>
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default User;