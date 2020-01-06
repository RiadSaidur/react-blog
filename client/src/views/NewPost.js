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
    <div>
      <form onSubmit={newPost}>
        <input type="text" placeholder="Title"/>
        <textarea placeholder="Post" cols="30" rows="7"></textarea>
        <input type="submit" value="Post"/>
      </form>
    </div>
  )
}

export default NewPost;