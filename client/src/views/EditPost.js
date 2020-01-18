import React from 'react'
import PostContext from '../store/postContext/PostContext';

export default function EditPost({ match }) {
  const id = match.params.id;
  return (
    <PostContext.Consumer>{ ({ posts, updatePost, removePost }) => {
      const idx = posts.findIndex(el => el.id === id );
      const post = { ...posts[idx] };
      const updateHandler = event => {
        event.preventDefault();
        event.persist();
        post.title = event.target.elements[0].value;
        post.msg = event.target.elements[1].value;
        console.log(post);
        updatePost(post);
      }

      const deletePost = () => removePost(id);
  
      return(
        <div className="nu-elevate-card sign-container contents">
          <h2>Update Post</h2>
          <form onSubmit={updateHandler} className="form">
            <input type="text" defaultValue={post.title} className="nu-elevate-cta"/>
            <textarea rows="7"  defaultValue={post.msg} className="nu-elevate-cta"/>
            <input type="submit" value="Save" className="nu-elevate-cta cta"/>
          </form>
          <button onClick={deletePost} className="cancel nu-elevate-cta">Delete Post</button>
        </div>
      )
    }}</PostContext.Consumer>
  )
}
