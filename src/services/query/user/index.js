// import { useContext } from 'react';
import { useQuery, useMutation /* useQueryClient */ } from 'react-query';

import { getLoggedInUser, getUser, deleteUser } from 'services/api/user';
import { editUser } from 'services/api/auth';
import { getStorage } from 'services/storage';
// import { ModalContext } from 'context/modalContext';

export const useGetAllUsers = () => {
  return useQuery('user', getUser, {
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
  // const { hideModal } = useContext(ModalContext);
  // const queryClient = useQueryClient();

  return useMutation(editUser, {
    onSuccess: response => {
      if (response) {
        // notification.info(response.message);
        // queryClient.invalidateQueries('user');
        // queryClient.invalidateQueries('loggedInUser');
        // hideModal();
      }
    },
    onError: error => {
      // notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useDeleteQuery = () => {
  // const { notification } = useContext(ThemeContext);
  // const { hideModal } = useContext(ModalContext);
  // const queryClient = useQueryClient();

  return useMutation('deleteUser', deleteUser, {
    onSuccess: response => {
      if (response) {
        // notification.info(response.message);
        // queryClient.invalidateQueries('user');
        // hideModal();
      }
    },
    onError: error => {
      // notification.error(`Failed to delete : ${error.message}`);
    }
  });
};
