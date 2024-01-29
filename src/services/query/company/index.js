import notification from 'components/Notification';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getCompanies,
  getConnections,
  getRequestList,
  getSendList,
  sendRequest,
  updateStatus
} from 'services/api/company';

export const useSendRequest = () => {
  const queryClient = useQueryClient();
  return useMutation(sendRequest, {
    onSuccess: response => {
      if (response) {
        queryClient.invalidateQueries('company');
        notification.info(response.message);
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(updateStatus, {
    onSuccess: response => {
      if (response) {
        notification.info(response.message);
        queryClient.invalidateQueries('connection');
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useGetCompanyList = params => {
  const query = useQuery(['company', params], () => getCompanies(params));
  return query;
};

export const useGetSendList = params => {
  const query = useQuery(['company', params], () => getSendList(params));
  return query;
};

export const useRequestedData = params => {
  const query = useQuery(['connection', params], () => getRequestList(params));
  return query;
};

export const useGetConnections = () => {
  const query = useQuery(['connection'], () => getConnections());
  return query;
};
