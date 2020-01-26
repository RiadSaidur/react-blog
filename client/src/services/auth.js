import api from './api'

export const addAuthHeader = token => {
  api.defaults.headers['Authorization'] =  `Bearer ${token}`;
}

export const SIGNIN = async creds => {
  try {
    const resposne = await api.post('/auth/signin', creds);
    if(resposne.status === 404) return {
      status: resposne.status
    }

    if(resposne.status === 500) return {
      status: resposne.status
    }

    addAuthHeader(resposne.data.idToken);
    
    return {
      status: resposne.status,
      data: resposne.data
    }
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    return { status: error.response.status }
  }
}

export const SIGNUP = async creds => {
  try {
    const resposne = await api.post('/auth/signup', creds);
    addAuthHeader(resposne.data.idToken);
    return resposne.data;
  } catch (error) {
    Promise.reject(error.response).catch(err => {})
    return { status: error.response.status }
  }
}