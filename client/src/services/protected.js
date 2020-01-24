import api from './api'

export const addPostToDB = async (post) => {
  const response = await api.post('/protected/post', post);
  if(response.status === 200) return {
    data: response.data,
    status: response.status
  }
  else return {
    error: response.data.error,
    status: response.status
  }
}

export const updatePostToDB = async (post, id) => {
  await api.patch(`protected/post/${id}`, post);
}

export const deletePostFromDB = async (id) => {
  await api.delete(`protected/post/${id}`);
}

export const addCommentToDB = async (post, id) => {
  const response = await api.post(`protected/comment/${id}`, post);
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
  const response = await api.patch(`protected/comment/${id}/${key}`, comment);
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
  const response = await api.delete(`protected/comment/${id}/${key}`);
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