import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://projeto-fine.herokuapp.com/api/',
});

export default instance;
