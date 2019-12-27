import React, { useState } from 'react'

import Posts from '../components/Posts';

export default function TaggedPost({ match }) {
  const [posts, updatePosts] =  useState([
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
  }
  return (
    <div className="tagged-container">
      <h4>p/{ match.params.tag }</h4>
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}
