import { getUserInfo } from './userApi';

export const fetchUserData = async () => {
  try {
    return await getUserInfo();
  } catch (error) {
    console.error('Error fetching user data', error);
    throw error;
  }
};
