import React, { useState, useContext } from 'react'

import CommentContext from '../store/commentContext/CommentContext';
import Errors from './Errors';

export default function CommentBox({ id, setNewComment }) {
  const [commentStatus, setCommentStatus] = useState(false)

  const { addNewComment, clearError,  comments: { errors }, setComments } = useContext(CommentContext)

  const commentHandler = async event => {
    event.persist();
    event.preventDefault();
    const content = {
      postId: id,
      comment: event.target.elements[0].value
    };
    setCommentStatus(true)
    await addNewComment(content)
    await setComments(id)
    setCommentStatus(false)
    if(!errors.length) setNewComment(false)
  }

  return (
    <div className="nu-elevate-card contents">
      {errors ? <Errors errors={errors} clearError={clearError} /> : ''}
      <form onSubmit={commentHandler} className="form">
        <textarea rows="2" className="nu-elevate-cta"/>
        <input 
          disabled={commentStatus}
          type="submit" 
          value={!commentStatus? 'Comment' : 'Commenting ...'} 
          className="nu-elevate-cta cta"
        />
      </form>
    </div>
  )
}
