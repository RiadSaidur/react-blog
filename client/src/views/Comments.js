import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CommentBox from '../components/CommentBox'

import '../stylesheets/Comments.css'

import CommentContext from '../store/commentContext/CommentContext';

function Comments({ match }){
  const [newComment, setNewComment] = useState(false);
  const temp = {
    key: 14,
    title: 'The End',
    msg: 'something will be written here',
  }
  const toggleBox = () => {
    setNewComment(!newComment);
  }
  return(
    <CommentContext.Consumer>{ ({ commentCollection }) => {
      const comments = commentCollection.find(el => el.postId === 'g2lGLvJ3ZOwOeNb7SeQd');
      return (
        <div>
          <div className="post nu-elevate-card">
            <h2>{temp.title}</h2>
            <p>{temp.msg}</p>
          </div>
          <button className='nu-elevate-cta cta newcomment' onClick={toggleBox}>+ Comment</button>
          {newComment && <CommentBox id={match.params.id} />}
          <div className="comments">
            {
              comments.cmnts.map(comment => (
                <div className="comment post nu-elevate-card" key={comment.key}>
                  <Link to={`/${comment.user}`}>
                    <h4>{comment.user}</h4>
                  </Link>
                  <p>{comment.msg}</p>
                  <p>{comment.date}</p>
                  <Link to={`/edit/comment/${comments.postId}/${comment.key}`}><button>Edit</button></Link>
                </div>
              ))
            }
          </div>
        </div>
      )
    }}</CommentContext.Consumer>
  )
}

export default Comments;