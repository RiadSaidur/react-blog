import { getComments } from '../../services//public'

import {
  addCommentToDB,
  updateCommentToDB,
  deleteCommentFromDB
} from '../../services/protected'

export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

const setComments = async (id, state) => {
  try {
    const response = await getComments(id);
    if(response.status >= 200 && response.status < 300) return response.data[0];
    return state;
  } catch (error) {
  }
}
// works
const addNewComment = async (content, state) => {
  const updates = state;
  try {
    await addCommentToDB({ msg: content.comment }, content.postId);
  } catch (error) {
  } finally {
    return updates;
  }
}

const updateComment = async (content, state) => {
  await updateCommentToDB({ msg: content.msg }, content.postId, content.key);
  return state;
}

const removeComment = async (content, state) => {
  await deleteCommentFromDB(content.postId, content.key);
  return state;
}

export const CommentReducer = async (state, action) => {
  switch(action.type) {
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