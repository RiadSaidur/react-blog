import axios from 'axios'

const api = axios.create({
  baseURL: 'https://asia-east2-pixxelbook.cloudfunctions.net/api'
});

export default api;