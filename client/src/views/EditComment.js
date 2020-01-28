import React, { useContext, useState, useEffect } from "react";

import Loading from '../components/Loading'
import Errors from '../components/Errors'

import CommentContext from "../store/commentContext/CommentContext";

function EditComment({ match, history }){
  const id = match.params.id;
  const commentKey = parseFloat(match.params.key);
  const [comment, setComment] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const {
    comments: {commentCollection, errors},
    clearError,
    setComments,
    updateComment,
    removeComment
  } = useContext(CommentContext);

  useEffect(() => {
    let temp = commentCollection.cmnts.find(el => el.key === commentKey);
    temp.postId = id;
    setComment(temp);
    // eslint-disable-next-line
  }, []);

  const updateHandler = async event => {
    event.preventDefault()
    event.persist()
    comment.key = commentKey
    comment.msg = event.target.elements[0].value
    setIsLoading(true)
    await updateComment(comment)
    await setComments(id)
    setIsLoading(false)
    if(!errors.length) history.goBack()
  };
  
  const deleteComment = async () => {
    setIsLoading(true)
    await removeComment(comment)
    await setComments(id)
    setIsLoading(false)
    if(!errors.length) history.goBack()
  }

  return (
    <div className="nu-elevate-card sign-container contents">
      {isLoading ? <Loading /> :
        <div>
          <h2>Update Comment</h2>
          <Errors errors={errors} clearError={clearError} /> 
          <form onSubmit={updateHandler} className="form">
            <textarea cols="30" rows="10"  defaultValue={comment.msg} className="nu-elevate-cta"/>
            <input type="submit" value="Save" className="nu-elevate-cta cta"/>
          </form>
          <button onClick={deleteComment} className="cancel nu-elevate-cta">Delete Comment</button>
          <button className="sign-options cancel nu-elevate-cta" onClick={history.goBack}>Cancel</button>
        </div>
      }
    </div>
  )
}

export default EditComment;