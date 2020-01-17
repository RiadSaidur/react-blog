import React from 'react';
import PostContext from '../store/contexts/PostContext';

function NewPost(){
  return(
    <PostContext.Consumer>{ ({ addNewPost }) => {
      const newPost = event => {
        event.persist();
        event.preventDefault();
        const post = {
          title: event.target.elements[0].value,
          msg: event.target.elements[1].value,
        }
        addNewPost(post);
      };
      return(
        <div className="nu-elevate-card sign-container contents">
          <h2>Add New Post</h2>
          <form onSubmit={newPost} className="form">
            <input type="text" placeholder="Title" className="nu-elevate-cta"/>
            <textarea placeholder="Post" rows="5" className="nu-elevate-cta"></textarea>
            <input type="submit" value="Post" className="nu-elevate-cta cta"/>
          </form>
          <button className="sign-options cancel nu-elevate-cta">Cancel</button>
        </div>
      )
    }}</PostContext.Consumer>
  )
}

export default NewPost;