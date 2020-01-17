export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

const addNewComment = (content, state) => {
  console.log(content);
  return state;
}
const updateComment = (content, state) => {
  console.log(content);
  return state;
}
const removeComment = (id, state) => {
  console.log(id);
  return state;
}

export const CommentReducer = (state, action) => {
  switch(action.type) {
    case ADD_NEW_COMMENT:
      return addNewComment(action.content, state);
    case UPDATE_COMMENT:
      return updateComment(action.content, state);
    case REMOVE_COMMENT:
      return removeComment(action.id, state);
    default:
      return state;
  }
}