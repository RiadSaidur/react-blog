import React from "react";

function EditPost({ id }){
  let post = {
    key: 0,
    title: 'Title to update',
    msg: 'Msg to update',
  }

  const updatePost = event => {
    event.preventDefault();
    event.persist();
    post.title = event.target.elements[0].value;
    post.msg = event.target.elements[1].value;
  }

  
  return(
    <div className="nu-elevate-card sign-container contents">
      <h2>Update Post</h2>
      <form onSubmit={updatePost} className="form">
        <input type="text" defaultValue={post.title} className="nu-elevate-cta"/>
        <textarea rows="7"  defaultValue={post.msg} className="nu-elevate-cta"/>
        <input type="submit" value="Save" className="nu-elevate-cta cta"/>
      </form>
      <button className="cancel nu-elevate-cta">Delete Post</button>
    </div>
  )
}

export default EditPost;