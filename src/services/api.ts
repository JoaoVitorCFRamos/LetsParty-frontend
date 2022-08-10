import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lets-party-api-development.herokuapp.com',
});

export default api;