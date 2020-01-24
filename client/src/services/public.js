import api from './api'
//  works
export const getAllPosts = async () => {
  try {
    const response = await api.get('/public');
    console.log(response);
    if(response.status >= 200 && response.status < 300) return {
      data: response.data,
      status: response.status
    }
    else return {
      error: response.data.error,
      status: response.status
    }
  } catch (error) {
    console.log(error);
  }
}
// works
export const getSinglePost = async id => {
  try {
    const response = await api.get(`/public/${id}`);
    console.log(response);
    if(response.status >= 200 && response.status < 300) return {
      data: {
        msg: response.data.msg,
        title: response.data.title,
      },
      status: response.status
    }
    else return {
      error: response.data.error,
      status: response.status
    }
  } catch (error) {
    console.log(error);
  }
}
// works
export const getComments = async id => {
  try {
    const response = await api.get(`/public/comments/${id}`);
    if(response.status >= 200 && response.status < 300) return {
      data: response.data,
      status: response.status
    }
    else return {
      error: response.data.error,
      status: response.status
    }
  } catch (error) {
    console.log(error);
  }
}

export const getFilteredPost = async tag => {
  try {
    const response = await api.get(`/public/filter/${tag}`);
    console.log(response);
    if(response.status >= 200 && response.status < 300) return {
      data: response.data,
      status: response.status
    }
    else return {
      error: response.data.error,
      status: response.status
    }
  } catch (error) {
    console.log(error);
  }
}

export const getUserPost = async user => {
  try {
    const response = await api.get(`/public/user/${user}`);
    console.log(response);
    if(response.status >= 200 && response.status < 300) return {
      data: response.data,
      status: response.status
    }
    else return {
      error: response.data.error,
      status: response.status
    }
  } catch (error) {
    console.log(error);
  }
}