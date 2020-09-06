import axios from 'axios';

const baseURL = 'http://10.0.2.2:8000';
const AXIOS = axios.create({
  baseURL,
  timeout: 100000,
});

export default AXIOS;