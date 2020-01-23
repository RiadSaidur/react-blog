import api from './api'

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.idToken}`
  }
};

export const addPostToDB = async (post) => {
  console.log(`okay`);
  const response = await api.post('/protected/post', post, config);
  console.log(response);
}

export const updatePostToDB = async (post, id) => {
  console.log(`okay`);
  const response = await api.patch(`protected/post/${id}`, post, config);
  console.log(response);
}

export const deletePostFromDB = async (id) => {
  console.log(`okay`);
  const response = await api.delete(`protected/post/${id}`, config);
  console.log(response);
}

export const addCommentToDB = async (post, id) => {
  console.log(`okay`);
  const response = await api.post(`protected/comment/${id}`, post, config);
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
  console.log(`okay`);
  const response = await api.patch(`protected/comment/${id}/${key}`, comment, config);
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
  console.log(`okay`);
  const response = await api.delete(`protected/comment/${id}/${key}`, config);
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
  const response = await api.patch(`protected/upvote/${id}`, config);
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
  const response = await api.patch(`protected/downvote/${id}`, config);
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