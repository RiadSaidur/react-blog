import React, { useContext, useState, useEffect } from "react";
import CommentContext from "../store/commentContext/CommentContext";

function EditComment({ match, history }){
  console.log('EditComments')

  const id = match.params.id;
  const commentKey = parseFloat(match.params.key);
  const [comment, setComment] = useState({});

  const {
    commentCollection,
    updateComment,
    removeComment
  } = useContext(CommentContext);

  useEffect(() => {
    let temp = commentCollection.cmnts.find(el => el.key === commentKey);
    temp.postId = id;
    setComment(temp);
    // eslint-disable-next-line
  }, []);

  const updateHandler = event => {
    event.preventDefault();
    event.persist();
    comment.key = commentKey;
    comment.msg = event.target.elements[0].value;
    updateComment(comment);
  };
  
  const deleteComment = () => removeComment(comment);

  return (
    <div className="nu-elevate-card sign-container contents">
      <h2>Update Comment</h2>
      <form onSubmit={updateHandler} className="form">
        <textarea cols="30" rows="10"  defaultValue={comment.msg} className="nu-elevate-cta"/>
        <input type="submit" value="Save" className="nu-elevate-cta cta"/>
      </form>
      <button onClick={deleteComment} className="cancel nu-elevate-cta">Delete Comment</button>
      <button className="sign-options cancel nu-elevate-cta" onClick={history.goBack}>Cancel</button>
    </div>
  )
}

export default EditComment;