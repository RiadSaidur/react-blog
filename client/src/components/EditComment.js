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
    <div className="editComment-container">
      <form onSubmit={updateComment}>
        <textarea cols="30" rows="10"  defaultValue={comment.msg} />
        <input type="submit" value="Save"/>
      </form>
    </div>
  )
}

export default EditComment;