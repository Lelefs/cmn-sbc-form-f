import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cmn-sbc-form-b.herokuapp.com',
});

export default api;
