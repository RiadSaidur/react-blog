import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Posts from '../components/Posts';

function Signin(){
  const [posts, updatePosts] = useState([
    {
      key: 0,
      author: 'AfricanBoi51',
      title: 'Title',
      msg: 'Msg',
      likes: 10,
      tags: ['react', 'dom', 'one']
    },
    {
      key: 1,
      author: 'DudeBoi',
      title: "Okay",
      msg: "Okay bro",
      likes: 5,
      tags: ['react', 'dom', 'two']
    }
  ]);
  const upvote = key => {
    let updates = posts;
    updates[key].likes++;
    updatePosts([...updates]);
  };
  const downvote = key => {
    let updates = posts;
    updates[key].likes--;
    updatePosts([...updates]);
  };
  return(
    <div className='container'>
      <Link to='/p/newpost'>New Post</Link>
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default Signin;