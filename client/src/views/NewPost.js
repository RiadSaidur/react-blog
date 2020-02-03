import React, { useState, useContext } from 'react';

import Errors from '../components/Errors'

import PostContext from '../store/postContext/PostContext';

import '../stylesheets/NewPost.css'

function NewPost({ history }){
  const [postStatus, setPostStatus] = useState(false);

  const { addNewPost, posts: { errors }, clearError } = useContext(PostContext);

  const newPost = async event => {
    event.persist();
    event.preventDefault();
    const post = {
      title: event.target.elements[0].value,
      msg: event.target.elements[1].value,
      tags: [`boom`]
    }
    setPostStatus(true);
    await addNewPost(post, history);
    setPostStatus(false);
  };
  return(
    <div className="addpost_container">
      <h2>Add New Post</h2>
      <Errors errors={errors} clearError={clearError} />
      <form onSubmit={newPost} className="form">
        <input type="text" placeholder="Title" className="nu-elevate-cta"/>
        <textarea placeholder="Post" rows="5" className="nu-elevate-cta"></textarea>
        <input 
          disabled={postStatus}
          type="submit" 
          value={postStatus ? 'Posting ...' : 'Post'} 
          className="nu-elevate-cta cta"
        />
      </form>
      <button className="sign-options cancel" onClick={history.goBack}>Cancel</button>
    </div>
  )
}

export default NewPost;