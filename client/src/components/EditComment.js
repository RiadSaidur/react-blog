import React from "react";

function EditComment({ id }){
  let comment = {
    key: id,
    msg: 'and overwhelmingly pure',
    date: '12:17 AM 21/12/2019'
  }

  const updateComment = event => {
    event.preventDefault();
    event.persist();
    comment.msg = event.target.elements[0].value;
  }

  
  return(
    <div className="nu-elevate-card sign-container contents">
      <h2>Update Comment</h2>
      <form onSubmit={updateComment} className="form">
        <textarea cols="30" rows="10"  defaultValue={comment.msg} className="nu-elevate-cta"/>
        <input type="submit" value="Save" className="nu-elevate-cta cta"/>
      </form>
      <button className="cancel nu-elevate-cta">Delete Comment</button>
    </div>
  )
}

export default EditComment;