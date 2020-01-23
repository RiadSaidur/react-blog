import React from 'react'

import CommentContext from '../store/commentContext/CommentContext';

export default function CommentBox({ id }) {
  console.log(`CommentBox`);
  
  return (
    <CommentContext.Consumer>{ ({ addNewComment }) => {
      const commentHandler = event => {
        event.persist();
        event.preventDefault();
        const content = {
          postId: id,
          comment: event.target.elements[0].value
        };
        addNewComment(content);
      }
      return (
        <div className="nu-elevate-card contents">
          <form onSubmit={commentHandler} className="form">
            <textarea rows="2" className="nu-elevate-cta"/>
            <input type="submit" value='comment' className="nu-elevate-cta cta"/>
          </form>
        </div>
      )
    }}</CommentContext.Consumer>
  )
}
