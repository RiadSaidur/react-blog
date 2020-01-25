import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/Posts.css'

import Loading from './Loading'

import UserContext from '../store/userContext/UserContext'

const Posts = ({ posts, upvote, downvote }) => {
  const { user: { isAuth, userHandle } } = useContext(UserContext);
  return(
    <div className="posts">
      {
        !posts.length ? <Loading /> :
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
              <div className='counts'>
                <div className='counts like-count'>
                  <img src={require('../assets/stocks.png')} alt='comments' />
                  <p>{post.likes}</p>
                </div>
                <div className='counts comment-count'>
                  <img src={require('../assets/quotation.png')} alt='comments' />
                  <p>{post.counts}</p>
                </div>
              </div>
              <div className="post-footer-cta">
                <button
                  disabled={!isAuth}
                  onClick={() => upvote(post, userHandle)}
                  className="post-cta"
                ><img src={require('../assets/up_arrow_black.png')} alt='Downvote' className={
                    post.upvote.includes(userHandle) ? "vote-cta vote-cta-active" : "vote-cta"}/>
                </button>
                <button
                  disabled={!isAuth}
                  onClick={() => downvote(post, userHandle)}
                  className="post-cta"
                ><img src={require('../assets/down_arrow_black.png')} alt='Downvote' className={
                  post.downvote.includes(userHandle) ? "vote-cta vote-cta-active" : "vote-cta"}/>
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