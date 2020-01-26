import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CommentBox from '../components/CommentBox'

import {getSinglePost} from '../services/public'

import '../stylesheets/Comments.css'

import CommentContext from '../store/commentContext/CommentContext';
import Loading from '../components/Loading';

function Comments({ match }){
  const [newComment, setNewComment] = useState(false);
  const [comments, setCommentsToState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  
  const toggleBox = () => setNewComment(!newComment);

  const { commentCollection, setComments } = useContext(CommentContext);

  const getComments = async id => {
    await setComments(match.params.id);
    setPost(await getSinglePost(match.params.id));
    setIsLoading(false);
  }

  useEffect(() => {
    getComments();
    // const temp = posts.find(el => el.id === match.params.id);
    // setPost(temp);
    
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(!isLoading) setCommentsToState(commentCollection.cmnts)
    // eslint-disable-next-line
  }, [isLoading]);  
  return (
    <div>
      {isLoading ? <Loading /> :
        <div>
        {
          post.status>=200 && post.status<300 ? 
          <div className="post nu-elevate-card">
            <h2>{post.data.title}</h2>
            <p>{post.data.msg}</p>
          </div> : <p>{post.error}</p>
        }
        <button className='nu-elevate-cta cta newcomment' onClick={toggleBox}>+ Comment</button>
        {newComment && <CommentBox id={match.params.id} setNewComment={setNewComment} />}
        <div className="comments">
          {
            comments.map(comment => (
              <div className="comment post nu-elevate-card" key={comment.key}>
                <Link to={`/${comment.author}`}>
                  <h4>{comment.author}</h4>
                </Link>
                <p>{comment.msg}</p>
                <p>{comment.date}</p>
                <Link to={`/edit/comment/${match.params.id}/${comment.key}`}><button>Edit</button></Link>
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