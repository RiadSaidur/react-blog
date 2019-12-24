import React, { useState } from 'react';

import NewPost from './NewPost';
import Posts from './Posts';

function Signin(){
  const [posts, updatePosts] = useState([
    {
      key: 0,
      author: 'AfricanBoi51',
      title: 'Title',
      msg: 'Msg',
      likes: 10
    },
    {
      key: 1,
      author: 'DudeBoi',
      title: "Okay",
      msg: "Okay bro",
      likes: 5
    }
  ]);
  const newPost = event => {
    event.persist();
    event.preventDefault();
    const post = {
      key: posts.length,
      title: event.target.elements[0].value,
      msg: event.target.elements[1].value,
      likes: 0
    }
    event.target.elements[0].value = '';
    event.target.elements[1].value = '';
    if(post.title && post.msg)updatePosts([...posts, post]);
  };
  const upvote = key => {
    let updates = posts;
    updates[key].likes++;
    updatePosts([...updates]);
  };
  const downvote = key => {
    let updates = posts;
    updates[key].likes--;
    updatePosts([...updates]);
  }
  return(
    <div className='container'>
      <NewPost newPost={newPost} />
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default Signin;