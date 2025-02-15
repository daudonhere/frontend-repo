import apiClient from '@/utils/apiClient';

export const getUserInfo = async () => {
  const response = await apiClient.get('/user/info');
  return response.data;
};
