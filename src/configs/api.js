import axios from 'axios';

// TODO: move baseURL to .env for the future
const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});

export default instance;
