import React, { useContext , useEffect} from 'react';

import Posts from '../components/Posts';
import PostContext from '../store/postContext/PostContext';

export default function TaggedPost({ match }) {
  const { posts: { postsCollections }, setPostsByTag, upvote, downvote } = useContext(PostContext);

  useEffect(() => {
    setPostsByTag(match.params.tag);
    // eslint-disable-next-line
  }, []);
  
  return (
    <div className="tagged-container">
      <h2>p/{ match.params.tag }</h2>
      <Posts posts={postsCollections} upvote={upvote} downvote={downvote}/>
    </div>
  )
}
