import { get, remove } from '..';

export const getUser = async () => {
  return await get('/user/get_all_users');
};
export const getLoggedInUser = async uid => {
  return await get(`/user/get_user_by_id/${uid}`);
};
export const deleteUser = async uid => {
  return await remove(`/user/deleteuser/${uid}`);
};
