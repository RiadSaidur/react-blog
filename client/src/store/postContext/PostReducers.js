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

export const SET_POSTS = 'SET_POSTS';
export const SET_POSTS_BY_USER = 'SET_POSTS_BY_USER';
export const SET_POSTS_BY_TAG = 'SET_POSTS_BY_TAG';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST';
// works
const setPosts = async state => {
  const response = await getAllPosts();
  if(response.status >= 200 && response.status < 300) return response.data;
  else console.log(response.error);
  return state;
}
// works
const setPostsByUser = async (user, state) => {
  const response = await getUserPost(user);
  if(response.status >= 200 && response.status < 300) return response.data;
  else console.log(response.error);
  return state;
}
// works
const setPostsByTag = async (tag, state) => {
  const response = await getFilteredPost(tag);
  if(response.status >= 200 && response.status < 300) return response.data;
  else console.log(response.error);
  return state;
}
// works
const upvote = async (post, state) => {
  let updates = state;
  if(post.upvote.includes('boomer')) return state;
  
  await upvotePostOnDB(post.id);
  console.log('after call');
  post.likes++;
  post.upvote.push('boomer');
  post.downvote.splice(post.downvote.indexOf('boomer'),1);
  
  return [...updates];
}

const downvote = async (post, state) => {
  let updates = state;
  if(post.downvote.includes('boomer')) return state;

  await downvotePostOnDB(post.id);

  post.likes--;
  post.downvote.push('boomer');
  post.upvote.splice(post.upvote.indexOf('boomer'),1);
  
  return [...updates];
}
// works
const addNewPost = async (post, state) => {
  const response = await addPostToDB(post);
  if(response.status === 200) console.log(response.data);
  else console.log(response.error);
  return state;
}
// works
const updatePost = async (content, state) => {
  await updatePostToDB(content.post, content.id);
  console.log(content);
  return state;
}
// works
const removePost = async (id, state) => {
  await deletePostFromDB(id);
  console.log(id);
  return state;
}

export const postReducer = (state, action) => {
  switch(action.type) {
    case SET_POSTS:
      return setPosts(state);
    case SET_POSTS_BY_USER:
      return setPostsByUser(action.user, state);
    case SET_POSTS_BY_TAG:
      return setPostsByTag(action.tag, state);
    case UPVOTE:
      return upvote(action.key, state);
    case DOWNVOTE:
      return downvote(action.key, state);
    case ADD_NEW_POST:
      return addNewPost(action.post, state);
    case UPDATE_POST:
      return updatePost(action.content, state);
    case REMOVE_POST:
      return removePost(action.id, state);
    default:
      return state;
  }
}