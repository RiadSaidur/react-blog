import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Posts.css'

const Posts = ({ posts, upvote, downvote }) => {
  console.log('Posts', posts)
  return(
    <div className="posts">
      {
        posts.map(post => (
          
            <div className="post nu-elevate-card" key={post.id}>
              <Link to={`/${post.author}`}>
                <p className="post-author">{post.author}</p>
              </Link>
              <Link to={`/comments/${post.id}`}>
                <h3>{post.title}</h3>
                <p>{post.msg}</p>
              </Link>
              <div className="tags">
                <h4>tags:&nbsp;</h4>
                {post.tags.map((tag, idx) => (                  
                  <Link to={`/p/${tag}`} key={idx}>{tag}&nbsp;</Link>
                ))}
              </div>
              <div className="post-footer">
                <p>{post.likes}</p>
                <div className="post-footer-cta">
                  <button className="post-cta" onClick={() => upvote(post)}>
                    <img src={require('../assets/heart.png')} alt='Downvote' className={
                      post.upvotes.includes("boomer") ? "vote-cta vote-cta-active" : "vote-cta"}/>
                  </button>
                  <button
                    onClick={() => downvote(post)}
                    className="post-cta"
                  ><img src={require('../assets/brokenheart.png')} alt='Downvote' className={
                    post.downvotes.includes("boomer") ? "vote-cta vote-cta-active" : "vote-cta"}/>
                  </button>
                </div>
              </div>
              <Link to={`/edit/post/${post.id}`}>
                <button>Edit</button>
              </Link>
            </div>
        ))
      }
    </div>
  )
}

export default Posts;