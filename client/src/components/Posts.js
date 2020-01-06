import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Posts.css'

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
              <div className="tags">
                <h4>tags:&nbsp;</h4>
                {post.tags.map(tag => (                  
                  <Link to={`/p/${tag}`}>{tag}&nbsp;</Link>
                ))}
              </div>
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
              <Link to={`/edit/post/${post.key}`}>
                <button>Edit</button>
              </Link>
            </div>
        ))
      }
    </div>
  )
}

export default NewPost;