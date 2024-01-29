import { post, get } from '..';

export const sendRequest = async reqData => {
  return await post('/connect/send_request', reqData);
};

export const updateStatus = async upData => {
  return await post('/connect/update_status', upData);
};

export const getSendList = async () => {
  return await post(`/connect/request_send`);
};

export const getRequestList = async () => {
  return await post(`/connect/request_receive`);
};

export const getConnections = async () => {
  return await get(`/connect/get_connections`);
};
