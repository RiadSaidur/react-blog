import { getAllPosts } from '../../services/public'

import {
  addPostToDB,
  updatePostToDB,
  deletePostFromDB,
  upvotePostOnDB,
  downvotePostOnDB
} from '../../services/protected'

export const SET_POSTS = 'SET_POSTS';
export const UPVOTE = 'UPVOTE';
export const DOWNVOTE = 'DOWNVOTE';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const UPDATE_POST = 'UPDATE_POST'
export const REMOVE_POST = 'REMOVE_POST';

const setPosts = async state => {
  const response = await getAllPosts();
  if(response.status >= 200 && response.status < 300) return response.data;
  else console.log(response.error);
  return state;
}

const upvote = async (post, state) => {
  let updates = state;
  if(post.upvotes.includes('boomer')) return [...updates];
  
  await upvotePostOnDB(post.id);

  post.likes++;
  post.upvotes.push('boomer');
  post.downvotes.splice(post.downvotes.indexOf('boomer'),1);
  
  return [...updates];
}

const downvote = async (post, state) => {
  let updates = state;
  if(post.downvotes.includes('boomer')) return [...updates];

  await downvotePostOnDB(post.id);

  post.likes--;
  post.downvotes.push('boomer');
  post.upvotes.splice(post.upvotes.indexOf('boomer'),1);
  
  return [...updates];
}

const addNewPost = async (post, state) => {
  await addPostToDB(post);
  console.log(post);
  return state;
}

const updatePost = async (content, state) => {
  await updatePostToDB(content.post, content.id);
  console.log(content);
  return state;
}

const removePost = async (id, state) => {
  await deletePostFromDB(id);
  console.log(id);
  return state;
}

export const postReducer = (state, action) => {
  switch(action.type) {
    case SET_POSTS:
      return setPosts(state);
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