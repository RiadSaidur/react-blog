import api from './api'

export const addAuthHeader = token => {
  api.defaults.headers['Authorization'] =  `Bearer ${token}`;
}

export const SIGNIN = async creds => {
  try {
    const resposne = await api.post('/auth/signin', creds);
    addAuthHeader(resposne.data.idToken);
    return resposne.data.idToken;
  } catch (error) {
    console.log(error);
  }
}

export const SIGNUP = async creds => {
  try {
    const resposne = await api.post('/auth/signup', creds);
    addAuthHeader(resposne.data.idToken);
    return resposne.data.idToken;
  } catch (error) {
    console.log(error);
  }
}