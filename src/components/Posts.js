import React from 'react';
import { Link } from 'react-router-dom';

function NewPost({ posts, upvote, downvote }){
  return(
    <div className="posts">
      {
        posts.map(post => (
          <Link to={`/comments/${post.key}`}>
            <div key={post.key} className="post" >
              <h3>{post.title}</h3>
              <p>{post.msg}</p>
              <div>
                <p>{post.likes}</p>
                <button onClick={() => upvote(post.key)}>Upvote</button>
                <button
                  onClick={() => downvote(post.key)}
                  className={post.likes<=0 ? 'hidden' : ''}
                >Downvote</button>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default NewPost;