import notification from 'components/Notification';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getConnections, getRequestList, getSendList, sendRequest, updateStatus } from 'services/api/company';

export const useSendRequest = () => {
  return useMutation(sendRequest, {
    onSuccess: response => {
      if (response) {
        // invalidateEmployee();
        notification.info(response.message);
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useUpdateStatus = () => {
  return useMutation(updateStatus, {
    onSuccess: response => {
      if (response) {
        // invalidateEmployee();
        notification.info(response.message);
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useGetCompanyList = params => {
  const query = useQuery(['company', params], () => getSendList(params));
  return query;
};

export const useRequestedData = params => {
  const query = useQuery(['company'], () => getRequestList(params));
  return query;
};

export const useGetConnections = () => {
  const query = useQuery(['connection'], () => getConnections());
  return query;
};
