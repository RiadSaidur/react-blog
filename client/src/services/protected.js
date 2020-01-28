import api from './api'

export const addPostToDB = async (post) => {
  try {
    const response = await api.post('/protected/post', post);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    let errors = [];
    if(error.response.status === 400) errors.push('Invalid Data. Please fill the forms properly');
    if(error.response.status === 401 || error.response.status === 403) errors.push('Please sign in to Post');
    if(error.response.status === 500) errors.push('Internal server error. Please try again later');
    console.log({ errors }, )
    return { errors }
  }
}

export const updatePostToDB = async (post, id) => {
  try {
    const response = await api.patch(`protected/post/${id}`, post);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    let errors = [];
    if(error.response.status === 400) errors.push('Invalid Data. Please fill the forms properly');
    if(error.response.status === 403) errors.push('Unauthorized acccess');
    if(error.response.status === 500) errors.push('Internal server error. Please try again later');
    return { errors }
  }

  // await api.patch(`protected/post/${id}`, post);
}

export const deletePostFromDB = async (id) => {
  try {
    const response = await api.delete(`protected/post/${id}`);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    let errors = [];
    if(error.response.status === 403) errors.push('Unauthorized acccess');
    if(error.response.status === 500) errors.push('Internal server error. Please try again later');
    return { errors }
  }

  // await api.delete(`protected/post/${id}`);
}

export const addCommentToDB = async (post, id) => {
  try {
    const response = await api.post(`protected/comment/${id}`, post);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    return { status: error.response.status }
  }
}

export const updateCommentToDB = async (comment, id, key) => {
  try {
    const response = await api.patch(`protected/comment/${id}/${key}`, comment);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    let errors = [];
    if(error.response.status === 400) errors.push('Invalid Data. Please fill the forms properly');
    if(error.response.status === 403) errors.push('Unauthorize access');
    if(error.response.status === 406) errors.push('User Handle already taken');
    if(error.response.status === 409) errors.push('Email already exists');
    if(error.response.status === 500) errors.push('Internal server error. Please try again later');
    return { errors }
  }
}

export const deleteCommentFromDB = async (id, key) => {
  try {
    const response = await api.delete(`protected/comment/${id}/${key}`);
    return {
      data: response.data,
      status: response.status
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    return { status: error.response.status }
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