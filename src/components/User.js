import React, { useState } from 'react';

import Posts from './Posts';

function User({ match }){
  const [posts, updatePosts] =  useState([
    {
      key: 0,
      author: match.params.user,
      title: 'Title',
      msg: 'Msg',
      likes: 10
    },
    {
      key: 1,
      author: match.params.user,
      title: "Okay",
      msg: "Okay bro",
      likes: 5
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
  }
  return(
    <div className="user-container">
      <h1>Posts by { match.params.user }</h1>
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default User;