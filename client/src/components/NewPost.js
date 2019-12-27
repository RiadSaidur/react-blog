import React from 'react';

function NewPost({ newPost }){
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