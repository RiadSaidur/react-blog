import React from 'react';
import PostContext from '../store/postContext/PostContext';

function NewPost({ history }){
  return(
    <PostContext.Consumer>{ ({ addNewPost }) => {
      const newPost = event => {
        event.persist();
        event.preventDefault();
        const post = {
          title: event.target.elements[0].value,
          msg: event.target.elements[1].value,
          tags: [`boom`]
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
          <button className="sign-options cancel nu-elevate-cta" onClick={history.goBack}>Cancel</button>
        </div>
      )
    }}</PostContext.Consumer>
  )
}

export default NewPost;