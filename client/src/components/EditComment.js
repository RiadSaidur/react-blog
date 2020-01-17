import React from "react";
import CommentContext from "../store/commentContext/CommentContext";

// TODO: USE Commment.Context
function EditComment({ id, commentKey }){
  return (
    <CommentContext.Consumer>{ ({ updateComment, removeComment}) => {
      const comment = {
        postId: id,
        key: commentKey,
        msg: 'okay'
      };
      const updateHandler = event => {
        event.preventDefault();
        event.persist();
        comment.postId = id;
        comment.key = commentKey;
        comment.msg = event.target.elements[0].value;
        updateComment(comment);
      };
      const deleteComment = () => removeComment(comment);
      return(
        <div className="nu-elevate-card sign-container contents">
          <h2>Update Comment</h2>
          <form onSubmit={updateHandler} className="form">
            <textarea cols="30" rows="10"  defaultValue={comment.msg} className="nu-elevate-cta"/>
            <input type="submit" value="Save" className="nu-elevate-cta cta"/>
          </form>
          <button onClick={deleteComment} className="cancel nu-elevate-cta">Delete Comment</button>
        </div>
      )
    }}</CommentContext.Consumer>
  )
}

export default EditComment;