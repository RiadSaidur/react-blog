import React from 'react';

function NewPost(){
  const newPost = event => {
    event.persist();
    event.preventDefault();
    // const post = {
    //   key: posts.length,
    //   title: event.target.elements[0].value,
    //   msg: event.target.elements[1].value,
    //   likes: 0
    // }
    // event.target.elements[0].value = '';
    // event.target.elements[1].value = '';
    // if(post.title && post.msg)updatePosts([...posts, post]);
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
}

export default NewPost;