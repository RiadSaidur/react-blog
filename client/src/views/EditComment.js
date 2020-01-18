import React from "react";
import CommentContext from "../store/commentContext/CommentContext";

// TODO: USE Commment.Context
function EditComment({ match }){
  const id = match.params.id;
  const commentKey = match.params.key;
  return (
    <CommentContext.Consumer>{ ({ commentCollection, updateComment, removeComment}) => {
      const comments = commentCollection.find(el => el.postId === 'g2lGLvJ3ZOwOeNb7SeQd');
      const comment = comments.cmnts.find(el => el.key == commentKey);
      
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