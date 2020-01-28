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

  // const response = await api.post(`protected/comment/${id}`, post);
  // if(response.status >= 200 && response.status < 300) return {
  //   data: response.data,
  //   status: response.status
  // }
  // else return {
  //   error: response.data.error,
  //   status: response.status
  // }
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
    if(error.response.status === 406) errors.push('User Handle already taken');
    if(error.response.status === 409) errors.push('Email already exists');
    if(error.response.status === 500) errors.push('Internal server error. Please try again later');
    console.log({ errors })
    return { errors }
  }

  // const response = await api.patch(`protected/comment/${id}/${key}`, comment);
  // if(response.status >= 200 && response.status < 300) return {
  //   data: response.data,
  //   status: response.status
  // }
  // else return {
  //   error: response.data.error,
  //   status: response.status
  // }
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

  // const response = await api.delete(`protected/comment/${id}/${key}`);
  // if(response.status >= 200 && response.status < 300) return {
  //   data: response.data,
  //   status: response.status
  // }
  // else return {
  //   error: response.data.error,
  //   status: response.status
  // }
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