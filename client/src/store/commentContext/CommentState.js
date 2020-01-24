import React from 'react'

import CommentContext from './CommentContext'

import {
  CommentReducer,
  SET_COMMENTS,
  ADD_NEW_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from './CommentReducers'

import useAsyncReducer from '../useAsyncReducer'

const CommentState = props => {
  const comments = {};

  const [ commentState, dispatch ] = useAsyncReducer(CommentReducer, comments);

  const setComments = id => dispatch({ type: SET_COMMENTS , id});
  const addNewComment = content => dispatch({ type: ADD_NEW_COMMENT, content });
  const updateComment = content => dispatch ({ type: UPDATE_COMMENT, content });
  const removeComment = content => dispatch({ type: REMOVE_COMMENT, content });

  return (
    <CommentContext.Provider value={{
      commentCollection: commentState,
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