import React from 'react';
import './stylesheets/Comments.css'

function Comments({ match }){
  const temp = {
    key: 14,
    title: 'The End',
    msg: 'something will be written here',
    comments: [
      {
        key: 0,
        id: 'chiki54',
        msg: 'so familiar',
        date: '12:17 AM 21/12/2019'
      },
      {
        key: 1,
        id: 'chiki54',
        msg: 'and overwhelmingly pure',
        date: '12:17 AM 21/12/2019'
      },
      {
        key: 2,
        id: 'chiki54',
        msg: 'this from that I hold now',
        date: '12:17 AM 21/12/2019'
      },
      {
        key: 3,
        id: 'chiki54',
        msg: 'wide eyes and hopefully wild',
        date: '12:17 AM 21/12/2019'
      }
    ]
  }
  return(
    <div>
      <div className="post">
        <h2>{temp.title}</h2>
        <p>{temp.msg}</p>
      </div>
      <div>
        <form>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value='comment'/>
        </form>
      </div>
      <div className="comments">
        {
          temp.comments.map(comment => (
            <div className="comment post" key={comment.key}>
              <h4>{comment.id}</h4>
              <p>{comment.msg}</p>
              <p>{comment.date}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Comments;