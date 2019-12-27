import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Comments.css'

function Comments({ match }){
  const temp = {
    key: 14,
    title: 'The End',
    msg: 'something will be written here',
    comments: [
      {
        key: 0,
        user: 'chiki54',
        msg: 'so familiar',
        date: '12:17 AM 21/12/2019'
      },
      {
        key: 1,
        user: 'chiki54',
        msg: 'and overwhelmingly pure',
        date: '12:17 AM 21/12/2019'
      },
      {
        key: 2,
        user: 'chiki54',
        msg: 'this from that I hold now',
        date: '12:17 AM 21/12/2019'
      },
      {
        key: 3,
        user: 'chiki54',
        msg: 'wide eyes and hopefully wild',
        date: '12:17 AM 21/12/2019'
      }
    ]
  }
  const commentHandler = event => {
    event.preventDefault();
    event.persist();
    console.log(event);
  }
  return(
    <div>
      <div className="post">
        <h2>{temp.title}</h2>
        <p>{temp.msg}</p>
      </div>
      <div>
        <form onSubmit={commentHandler}>
          <textarea cols="30" rows="10"></textarea>
          <input type="submit" value='comment'/>
        </form>
      </div>
      <div className="comments">
        {
          temp.comments.map(comment => (
            <div className="comment post" key={comment.key}>
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