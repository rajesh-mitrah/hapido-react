import { get, post, put } from '..';

export const registerUser = async userData => {
  return await post('/register', userData);
};

export const loginUser = async userData => {
  return await post('/login', userData);
};

export const editUser = async mappingData => {
  return await put(`/user/update_user/${mappingData.userId}`, mappingData.updatedData);
};

export const getUserData = async () => {
  return await get('/user/get_all_users');
};

export const getConnectionData = async () => {
  return await get('/connect/request_send');
};
