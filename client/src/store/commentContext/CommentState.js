import React, { useReducer } from 'react'

import CommentContext from './CommentContext'

import {
  CommentReducer,
  ADD_NEW_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT
} from './CommentReducers'

const CommentState = props => {
  const comments = [{
    postId: 'g2lGLvJ3ZOwOeNb7SeQd',
    cmnts: [
      {
        key: 353.09430784945863,
        user: 'voomoo',
        msg: 'This is from an API',
        createdAt: '2020-01-08T20:21:08.845Z'
      },
      {
        msg: 'Where are mmy previous comments?',
        createdAt: '2020-01-08T20:27:48.853Z',
        key: 556.9881502735184,
        user: 'voomoo'
      },
      {
        msg: 'They are gone :(',
        createdAt: '2020-01-08T20:29:46.253Z',
        key: 195.3211026050008,
        user: 'rakib'
      },
      {
        key: 198.060956935185,
        user: 'saidur',
        msg: 'Stop whining now',
        createdAt: '2020-01-08T20:31:34.013Z'
      },
      {
        key: 9759,
        user: 'dudeboi',
        msg: 'like comment kore pasay takun',
        createdAt: '2020-01-08T20:35:54.611Z'
      },
      {
        key: 8091,
        user: 'saidur',
        msg: 'edited my comment again',
        createdAt: '2020-01-09T05:37:27.960Z'
      }
    ]
  }];

  const [ commentState, dispatch ] = useReducer(CommentReducer, comments);

  const addNewComment = content => dispatch({ type: ADD_NEW_COMMENT, content });
  const updateComment = content => dispatch ({ type: UPDATE_COMMENT, content });
  const removeComment = id => dispatch({ type: REMOVE_COMMENT, id });

  return (
    <CommentContext.Provider value={{
      commentCollection: commentState,
      addNewComment,
      updateComment,
      removeComment
    }}>
      {props.children}
    </CommentContext.Provider>
  )
}

export default CommentState;