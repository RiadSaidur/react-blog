import React from 'react'

export default function CommentBox({ commentHandler }) {
  return (
    <div className="nu-elevate-card contents">
      <form onSubmit={commentHandler} className="form">
        <textarea rows="2" className="nu-elevate-cta"/>
        <input type="submit" value='comment' className="nu-elevate-cta cta"/>
      </form>
    </div>
  )
}
