import {getUserId} from '../helpers/utils';
import axios from '../config/axios';

export const getPosts = async (page) => {
  try {
    const res = await axios.get(`post?perPage=4&page=${page}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLatestPosts = async (lastPostDate) => {
  try {
    const res = await axios.get(`post/latest?from=${lastPostDate}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const updatePostData = async (postId, interaction, type) => {
  try {
    const userId = await getUserId();
    const res = await axios.put(
      `post/${postId}?userId=${userId}&type=${type}&interaction=${interaction}`,
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
