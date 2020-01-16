export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_COMMENT ='REMOVE_COMMENT';

const upvote = (key, state) => {
  let updates = state;
  const idx = updates.findIndex(post => post.id === key);
  if(updates[idx].upvotes.includes('boomer')) return [...updates];
  updates[idx].likes++;
  updates[idx].upvotes.push('boomer');
  updates[idx].downvotes.splice(updates[idx].downvotes.indexOf('boomer'),1);
  return [...updates];
}

const downvote = (key, state) => {
  let updates = state;
  let idx = updates.findIndex(post => post.id === key);
  if(updates[idx].downvotes.includes('boomer')) return [...updates];
  updates[idx].likes--;
  updates[idx].downvotes.push('boomer');
  updates[idx].upvotes.splice(updates[idx].upvotes.indexOf('boomer'),1);
  return [...updates];
}

const addNewPost = (post, state) => {
  
}

const addNewComment = (id, state) => {

}

const removePost = (id, state) => {

}

const removeComment = (id, state) => {

}

export const postReducer = (state, action) => {
  switch(action.type) {
    case UPVOTE:
      return upvote(action.key, state);
    case DOWNVOTE:
      return downvote(action.key, state);
    case ADD_NEW_POST:
      return
    case ADD_NEW_COMMENT:
      return
    case REMOVE_POST:
      return
    case REMOVE_COMMENT:
      return
    default:
      return state;
  }
}