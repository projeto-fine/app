import {getUserId} from '../helpers/utils';
import axios from '../config/axios';

export const getUserInfo = async () => {
  try {
    const userId = await getUserId();
    const res = await axios.get(`user/${userId}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
