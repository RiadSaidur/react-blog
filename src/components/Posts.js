import React from 'react';
import { Link } from 'react-router-dom';

import './stylesheets/Posts.css'

function NewPost({ posts, upvote, downvote }){
  return(
    <div className="posts">
      {
        posts.map(post => (
          
            <div className="post" key={post.key}>
              <Link to={`/${post.author}`}>
                <p className="post-author">{post.author}</p>
              </Link>
              <Link to={`/comments/${post.key}`}>
                <h3>{post.title}</h3>
                <p>{post.msg}</p>
              </Link>
              <div className="post-footer">
                <p>{post.likes}</p>
                <div className="post-footer-cta">
                  <button className="post-cta" onClick={() => upvote(post.key)}>Upvote</button>
                  <button
                    onClick={() => downvote(post.key)}
                    className={post.likes<=0 ? 'hidden' : 'post-cta'}
                  >Downvote</button>
                </div>
              </div>
            </div>
        ))
      }
    </div>
  )
}

export default NewPost;