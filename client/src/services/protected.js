import api from './api'

export const addPostToDB = async (post) => {
  console.log(`okay`);
  const response = await api.post('/protected/post', post);
  if(response.status === 200) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
  console.log(response);
}

export const updatePostToDB = async (post, id) => {
  console.log(`okay`);
  const response = await api.patch(`protected/post/${id}`, post);
  console.log(response);
}

export const deletePostFromDB = async (id) => {
  console.log(`okay`);
  const response = await api.delete(`protected/post/${id}`);
  console.log(response);
}

export const addCommentToDB = async (post, id) => {
  console.log(`okay`);
  const response = await api.post(`protected/comment/${id}`, post);
  console.log(response);
  if(response.status >= 200 && response.status < 300) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
}

export const updateCommentToDB = async (comment, id, key) => {
  console.log(id, key);
  const response = await api.patch(`protected/comment/${id}/${key}`, comment);
  console.log(response);
  if(response.status >= 200 && response.status < 300) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
}

export const deleteCommentFromDB = async (id, key) => {
  console.log(id, key);
  const response = await api.delete(`protected/comment/${id}/${key}`);
  console.log(response);
  if(response.status >= 200 && response.status < 300) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
}

export const upvotePostOnDB = async (id) => {
  const response = await api.patch(`protected/upvote/${id}`);
  console.log(response);
  if(response.status >= 200 && response.status < 300) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
}

export const downvotePostOnDB = async (id) => {
  const response = await api.patch(`protected/downvote/${id}`);
  console.log(response);
  if(response.status >= 200 && response.status < 300) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
}

export default `okay`;