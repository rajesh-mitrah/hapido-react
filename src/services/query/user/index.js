import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getLoggedInUser, deleteUser } from 'services/api/user';
import { editUser, fetchUsersData, getUserData } from 'services/api/auth';
import { getStorage } from 'services/storage';
import notification from 'components/Notification';

export const useGetAllUserData = () => {
  return useQuery('user', getUserData, {
    staleTime: Infinity,
    retry: 3, //retry count
    retryDelay: 3000 //retry delay
  });
};

export const useGetLoggedInUsers = () => {
  const userId = getStorage('loggedinUserId');
  return useQuery('loggedInUser', () => getLoggedInUser(userId), {
    staleTime: Infinity,
    retry: 3, //retry count
    retryDelay: 3000 //retry delay
  });
};

export const useUpdateQuery = () => {
  return useMutation(editUser, {
    onSuccess: response => {
      if (response) {
        notification.info(response.message);
        // queryClient.invalidateQueries('user');
        // queryClient.invalidateQueries('loggedInUser');
        // hideModal();
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useFetchAllUsers = () => {
  return useMutation('search', fetchUsersData, {
    onSuccess: response => {
      if (response) {
      }
    },
    onError: error => {
      notification.error(`Failed to fetch : ${error.message}`);
    }
  });
};

export const useDeleteQuery = () => {
  const queryClient = useQueryClient();

  return useMutation('deleteUser', deleteUser, {
    onSuccess: response => {
      if (response) {
        notification.info('user deleted successfully');
        queryClient.refetchQueries('user');
      }
    },
    onError: error => {
      notification.error(`Failed to delete : ${error.message}`);
    }
  });
};
