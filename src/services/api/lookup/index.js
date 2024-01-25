import { get } from '..';

export const getRoles = async () => {
  return await get('/get_roles');
};

export const getStatus = async () => {
  return await get('/get_statuses');
};

export const getCountries = async () => {
  return await get('/get_countries');
};
