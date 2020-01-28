import React, { useContext, useState } from 'react'

import Errors from '../components/Errors'

import PostContext from '../store/postContext/PostContext';

export default function EditPost({ match, history }) {
  const [isSaving, setIsSaving] = useState(false)

  const {
    posts: {
      postsCollections,
      errors
    },
    clearError,
    updatePost,
    removePost
  } = useContext(PostContext)
  
  const idx = postsCollections.findIndex(el => el.id === match.params.id );
  
  const post = {
    title: postsCollections[idx].title,
    msg: postsCollections[idx].msg
  }

  const updateHandler = async event => {
    event.preventDefault();
    event.persist();
    post.title = event.target.elements[0].value;
    post.msg = event.target.elements[1].value;
    setIsSaving(true)
    await updatePost({ post, id: match.params.id, history })
    setIsSaving(false)
  }

  const deletePost = async () => {
    setIsSaving(true)
    await removePost(match.params.id)
    setIsSaving(false)
    if(!errors.length) history.goBack()
  };

  return(
    <div className="nu-elevate-card sign-container contents">
      <h2>Update Post</h2>
      <Errors errors={errors} clearError={clearError} />
      <form onSubmit={updateHandler} className="form">
        <input type="text" defaultValue={post.title} className="nu-elevate-cta"/>
        <textarea rows="7"  defaultValue={post.msg} className="nu-elevate-cta"/>
        <input
          disabled={isSaving}
          type="submit" 
          value={isSaving? 'Saving...' : 'Save'} 
          className="nu-elevate-cta cta"
        />
      </form>
      <button 
      disabled={isSaving}
      onClick={deletePost} 
      className="cancel nu-elevate-cta">Delete Post</button>
      <button className="sign-options cancel nu-elevate-cta" onClick={history.goBack}>Cancel</button>
    </div>
  )
}
