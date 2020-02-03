import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../components/Loading';
import CommentBox from '../components/CommentBox'

import {getSinglePost} from '../services/public'

import '../stylesheets/Comments.css'

import CommentContext from '../store/commentContext/CommentContext';
import UserContext from '../store/userContext/UserContext'

function Comments({ match }){
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState(false);

  const [post, setPost] = useState([]);
  
  const toggleBox = () => setNewComment(!newComment);

  const { comments: { commentCollection }, setComments } = useContext(CommentContext);
  const { user: { userHandle } } = useContext(UserContext);

  const getComments = async () => {
    setIsLoading(true)
    setPost(await getSinglePost(match.params.id))
    if(!Object.keys(post).length) await setComments(match.params.id)
    setIsLoading(false)
  }

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> :
        <div className='addpost_container'>
        {
          post.status>=200 && post.status<300 ? 
          <div className="post">
            <h2>{post.data.title}</h2>
            <p>{post.data.msg}</p>
          </div> : <p>{post.error}</p>
        }
        <button className='nu-elevate-cta cta newcomment' onClick={toggleBox}>+ Comment</button>
        {newComment && <CommentBox id={match.params.id} setNewComment={setNewComment} />}
        <div className="comments">
          {
            commentCollection.cmnts.map(comment => (
              <div className="comment post" key={comment.key}>
                <Link to={`/${comment.author}`}>
                  <h4>{comment.author}</h4>
                </Link>
                <p>{comment.msg}</p>
                <p>{comment.date}</p>
                {userHandle === comment.author ?
                  <Link to={`/edit/comment/${match.params.id}/${comment.key}`}><button>Edit</button></Link> : ''
                }
              </div>
            ))
          }
        </div>
      </div>
    }
    </div>
  )
}

export default Comments;