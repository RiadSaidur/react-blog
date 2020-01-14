import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CommentBox from '../components/CommentBox'

import '../stylesheets/Comments.css'

function Comments({ match }){
  const [newComment, setNewComment] = useState(false);
  const [comments, setComments] = useState({
    postId: 'g2lGLvJ3ZOwOeNb7SeQd',
    cmnts: [
      {
        key: 353.09430784945863,
        user: 'voomoo',
        msg: 'This is from an API',
        createdAt: '2020-01-08T20:21:08.845Z'
      },
      {
        msg: 'Where are mmy previous comments?',
        createdAt: '2020-01-08T20:27:48.853Z',
        key: 556.9881502735184,
        user: 'voomoo'
      },
      {
        msg: 'They are gone :(',
        createdAt: '2020-01-08T20:29:46.253Z',
        key: 195.3211026050008,
        user: 'rakib'
      },
      {
        key: 198.060956935185,
        user: 'saidur',
        msg: 'Stop whining now',
        createdAt: '2020-01-08T20:31:34.013Z'
      },
      {
        key: 9759,
        user: 'dudeboi',
        msg: 'like comment kore pasay takun',
        createdAt: '2020-01-08T20:35:54.611Z'
      },
      {
        key: 8091,
        user: 'saidur',
        msg: 'edited my comment again',
        createdAt: '2020-01-09T05:37:27.960Z'
      }
    ]
  });
  const temp = {
    key: 14,
    title: 'The End',
    msg: 'something will be written here',
  }
  const commentHandler = event => {
    event.preventDefault();
    event.persist();
    console.log(event);
  }
  const toggleBox = () => {
    setNewComment(!newComment);
  }
  return(
    <div>
      <div className="post nu-elevate-card">
        <h2>{temp.title}</h2>
        <p>{temp.msg}</p>
      </div>
      <button className='nu-elevate-cta cta newcomment' onClick={toggleBox}>+ Comment</button>
      {newComment && <CommentBox commentHandler={commentHandler}/>}
      <div className="comments">
        {
          comments.cmnts.map(comment => (
            <div className="comment post nu-elevate-card" key={comment.key}>
              <Link to={`/${comment.user}`}>
                <h4>{comment.user}</h4>
              </Link>
              <p>{comment.msg}</p>
              <p>{comment.date}</p>
              <Link to={`/edit/comment/${comment.key}`}>
                <button>Edit</button>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comments;