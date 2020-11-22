import axios from '../config/axios';

export const getPosts = async () => {
  const res = await axios.get('posts');
  return res.data;
};
