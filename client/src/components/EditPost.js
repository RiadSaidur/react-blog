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
    <div className="editComment-container">
      <form onSubmit={updatePost}>
        <input type="text" defaultValue={post.title}/>
        <textarea cols="30" rows="10"  defaultValue={post.msg} />
        <input type="submit" value="Save"/>
      </form>
    </div>
  )
}

export default EditPost;