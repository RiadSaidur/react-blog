import React, { useState, useContext } from 'react';
import PostContext from '../store/postContext/PostContext';

function NewPost({ history }){
  const [postStatus, setPostStatus] = useState('Post');

  const { addNewPost } = useContext(PostContext);

  const newPost = async event => {
    event.persist();
    event.preventDefault();
    const post = {
      title: event.target.elements[0].value,
      msg: event.target.elements[1].value,
      tags: [`boom`]
    }
    setPostStatus('Posting');
    await addNewPost(post);
    setPostStatus('Post');
  };
  return(
    <div className="nu-elevate-card sign-container contents">
      <h2>Add New Post</h2>
      <form onSubmit={newPost} className="form">
        <input type="text" placeholder="Title" className="nu-elevate-cta"/>
        <textarea placeholder="Post" rows="5" className="nu-elevate-cta"></textarea>
        <input type="submit" value={postStatus} className="nu-elevate-cta cta"/>
      </form>
      <button className="sign-options cancel nu-elevate-cta" onClick={history.goBack}>Cancel</button>
    </div>
  )
}

export default NewPost;