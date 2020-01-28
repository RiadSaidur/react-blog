import React from 'react'

import CommentContext from './CommentContext'

import {
  CommentReducer,
  CLEAR_ERROR,
  SET_COMMENTS,
  ADD_NEW_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from './CommentReducers'

import useAsyncReducer from '../useAsyncReducer'

const CommentState = props => {
  const comments = {
    commentCollection: [],
    errors: []
  };

  const [ commentState, dispatch ] = useAsyncReducer(CommentReducer, comments);

  const clearError = idx => dispatch({ type: CLEAR_ERROR, idx });
  const setComments = id => dispatch({ type: SET_COMMENTS , id});
  const addNewComment = content => dispatch({ type: ADD_NEW_COMMENT, content });
  const updateComment = content => dispatch ({ type: UPDATE_COMMENT, content });
  const removeComment = content => dispatch({ type: REMOVE_COMMENT, content });

  return (
    <CommentContext.Provider value={{
      comments: {
        commentCollection: commentState.commentCollection,
        errors: commentState.errors
      },
      clearError,
      setComments,
      addNewComment,
      updateComment,
      removeComment
    }}>
      {props.children}
    </CommentContext.Provider>
  )
}

export default CommentState;