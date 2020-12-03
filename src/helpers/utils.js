import {Auth} from 'aws-amplify';

export const getUserId = async () => {
  try {
    const {username} = await Auth.currentUserInfo();
    if (username !== null) {
      return username;
    }
  } catch (e) {
    console.log(e);
  }
};
