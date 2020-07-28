import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cmn-sbc-form-b.herokuapp.com',
  // baseURL: 'http://localhost:3333',
});

export default api;
