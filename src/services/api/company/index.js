import { post, get, put } from '..';

export const getCompanies = async () => {
  return await get('/company');
};
export const sendRequest = async reqData => {
  return await post('/connect/send_request', reqData);
};

export const updateStatus = async upData => {
  return await put('/connect/update_request', upData);
};

export const getSendList = async params => {
  return await post(`/connect/request_send`, params);
};

export const getRequestList = async params => {
  return await post(`/connect/request_receive`, params);
};

export const getConnections = async () => {
  return await get(`/connect/get_connections`);
};
