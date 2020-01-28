import { getComments } from '../../services/public'

import { isEmpty } from '../../utils/validators'

import {
  addCommentToDB,
  updateCommentToDB,
  deleteCommentFromDB
} from '../../services/protected'

export const CLEAR_ERROR= 'CLEAR_ERROR';
export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

const setComments = async (id, state) => {
  const updates = state;
  const response = await getComments(id);
  
  updates.commentCollection = response.data[0];

  return {...updates};
}

const clearError = (idx, state) => {
  const updates = state;
  
  updates.errors.splice(idx, 1);

  return {...updates};
}

// works
const addNewComment = async (content, state) => {
  const updates = state;
  if(isEmpty(content.comment)){
    updates.errors.push('Comment can not be empty');
    return updates;
  }

  const response = await addCommentToDB({ msg: content.comment }, content.postId);

  if(response.status === 400) updates.errors.push('Invalid Data. Please fill the forms properly');
  if(response.status === 404) updates.errors.push('Content not found');
  if(response.status === 500) updates.errors.push('Internal server error. Please try again later');
  
  return updates;
}

const updateComment = async (content, state) => {
  const updates = state;

  if(isEmpty(content.msg)){
    updates.errors.push('Comment can not be empty');
    return {...updates};
  }
  
  const response = await updateCommentToDB({ msg: content.msg }, content.postId, content.key);

  if(response?.errors) {
    updates.errors = response.errors;
    console.log(response.errors)
    return {...updates}
  }
  
  return {...updates}
}

const removeComment = async (content, state) => {
  const updates = state;

  const response = await deleteCommentFromDB(content.postId, content.key);

  if(response.status === 403) updates.errors.push('You can not edit this comment');
  if(response.status === 404) updates.errors.push('Content not found');
  if(response.status === 500) updates.errors.push('Internal server error. Please try again later');

  return updates;
}

export const CommentReducer = async (state, action) => {
  switch(action.type) {
    case CLEAR_ERROR:
      return clearError(action.idx, state);
    case SET_COMMENTS:
      return setComments(action.id, state);
    case ADD_NEW_COMMENT:
      return await addNewComment(action.content, state);
    case UPDATE_COMMENT:
      return await updateComment(action.content, state);
    case REMOVE_COMMENT:
      return await removeComment(action.content, state);
    default:
      return state;
  }
}