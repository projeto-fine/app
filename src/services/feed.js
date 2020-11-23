import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../config/axios';

export const getPosts = async (page) => {
  const res = await axios.get(`post?perPage=4&page=${page}`);
  return res.data;
};

export const getLatestPosts = async (lastPostDate) => {
  const res = await axios.get(`post/latest?from=${lastPostDate}`);
  return res.data;
};

export const updatePostData = async (postId, interaction, type) => {
  try {
    const userId = await AsyncStorage.getItem('@userId');
    if (userId !== null) {
      const res = await axios.put(
        `post/${postId}?userId=${userId}&type=${type}&interaction=${interaction}`,
      );
      return res.data;
    }
  } catch (e) {
    console.error(e);
  }
};
