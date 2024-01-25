import { get, post, put } from '..';

export const addOrganization = async details => {
  return await post('/company/', details);
};

export const getOrganizationDetails = async id => {
  return await get(`/company/${id.replaceAll('"', '')}`);
};

export const getUserById = async id => {
  return await get(`/user/get_user_by_id/${id.replaceAll('"', '')}`);
};

export const updateUserById = async ({ id, formData }) => {
  return await put(`/user/update_user/${id.replaceAll('"', '')}`, formData);
};

export const updateCompanyById = async ({ id, formData }) => {
  return await put(`/company/${id.replaceAll('"', '')}`, formData);
};
