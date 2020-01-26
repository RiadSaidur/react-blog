import React, { useState, useContext } from 'react'

import CommentContext from '../store/commentContext/CommentContext';

export default function CommentBox({ id, setNewComment }) {
  const [commentStatus, setCommentStatus] = useState(false);

  const { addNewComment } = useContext(CommentContext)

  const commentHandler = async event => {
    event.persist();
    event.preventDefault();
    const content = {
      postId: id,
      comment: event.target.elements[0].value
    };
    if(!content.comment.trim().length) return
    setCommentStatus(true)
    await addNewComment(content)  
    setCommentStatus(false)
    setNewComment(false)
  }

  return (
    <div className="nu-elevate-card contents">
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
