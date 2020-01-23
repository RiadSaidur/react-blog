import api from './api'

export const SIGNIN = async creds => {
  try {
    const resposne = await api.post('/auth/signin', creds);
    return resposne.data.idToken;
  } catch (error) {
    console.log(error);
  }
}

export const SIGNUP = async creds => {
  try {
    const resposne = await api.post('/auth/signup', creds);
    return resposne.data.idToken;
  } catch (error) {
    console.log(error);
  }
}