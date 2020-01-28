import { isEmpty } from '../../utils/validators';

import {
  getAllPosts,
  getUserPost,
  getFilteredPost
} from '../../services/public'

import {
  addPostToDB,
  updatePostToDB,
  deletePostFromDB,
  upvotePostOnDB,
  downvotePostOnDB
} from '../../services/protected'

export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_POSTS = 'SET_POSTS';
export const SET_POSTS_BY_USER = 'SET_POSTS_BY_USER';
export const SET_POSTS_BY_TAG = 'SET_POSTS_BY_TAG';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST';

const clearError = (idx, state) => {
  const updates = state;
  
  updates.errors.splice(idx, 1);

  return {...updates};
}
// works
const setPosts = async state => {
  const updates = state;
  const response = await getAllPosts();
  if(response.status >= 200 && response.status < 300) updates.postsCollections = response.data;
  return {...updates};
}
// works
const setPostsByUser = async (user, state) => {
  const updates = state;
  const response = await getUserPost(user);
  if(response.status >= 200 && response.status < 300) updates.postsCollections = response.data;
  return {...updates};
}
// works
const setPostsByTag = async (tag, state) => {
  const updates = state;
  const response = await getFilteredPost(tag);
  if(response.status >= 200 && response.status < 300) updates.postsCollections = response.data;
  return {...updates};
}
// works
const upvote = async (post, user, state) => {
  let updates = state;
  if(post.upvote.includes(user)) return state;
  
  post.likes++;
  post.upvote.push(user);
  post.downvote.splice(post.downvote.indexOf(user),1);

  await upvotePostOnDB(post.id);

  return [...updates];
}

const downvote = async (post, user, state) => {
  let updates = state;
  if(post.downvote.includes(user)) return state;

  post.likes--;
  post.downvote.push(user);
  post.upvote.splice(post.upvote.indexOf(user),1);

  await downvotePostOnDB(post.id);
  
  return [...updates];
}
// works
const addNewPost = async (post, history, state) => {
  let updates = state;
  
  if(isEmpty(post.msg) || isEmpty(post.title)){
    updates.errors.push('Fields can not be empty');
    console.log(updates.errors)
    return {...updates};
  }

  const response = await addPostToDB(post);

  if(response?.errors) {
    updates.errors = response.errors;
    console.log(updates.errors)
    return {...updates}
  }
  await setPosts(updates)
  history.push('/')
  return state;
}
// works
const updatePost = async (content, state) => {
  let updates = state;

  if(isEmpty(content.post.msg) || isEmpty(content.post.title)){
    updates.errors.push('Fields can not be empty');
    return {...updates};
  }

  const response = await updatePostToDB(content.post, content.id);

  if(response?.errors) {
    updates.errors = response.errors;
    return {...updates}
  }

  await setPosts(updates)
  content.history.push('/')

  return state;
}
// works
const removePost = async (id, state) => {
  await deletePostFromDB(id);
  return state;
}

export const postReducer = (state, action) => {
  switch(action.type) {
    case CLEAR_ERROR:
      return clearError(action.idx, state);
    case SET_POSTS:
      return setPosts(state);
    case SET_POSTS_BY_USER:
      return setPostsByUser(action.user, state);
    case SET_POSTS_BY_TAG:
      return setPostsByTag(action.tag, state);
    case UPVOTE:
      return upvote(action.key, action.user, state);
    case DOWNVOTE:
      return downvote(action.key, action.user, state);
    case ADD_NEW_POST:
      return addNewPost(action.post, action.history, state);
    case UPDATE_POST:
      return updatePost(action.content, state);
    case REMOVE_POST:
      return removePost(action.id, state);
    default:
      return state;
  }
}