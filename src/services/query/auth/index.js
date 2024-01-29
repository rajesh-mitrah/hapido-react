import { useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { COMPANY_PATH, LOGIN_PATH } from 'constants/route';
import { AuthContext } from 'context/authContext';
import { getUserData, loginUser, registerUser } from 'services/api/auth';
import { setStorage } from 'services/storage';
import notification from 'components/Notification';

export const useLoginUser = () => {
  const navigate = useNavigate();
  const { setHasStorage } = useContext(AuthContext);

  return useMutation(loginUser, {
    onSuccess: response => {
      const token = response?.data?.token;
      const loggedInUserId = response?.data?.id;
      const loggedInData = {
        userEmail: response?.data?.email,
        userName: response?.data?.firstName + response?.data?.lastName
      };
      if (token) {
        setStorage('authToken', token);
        setStorage('loggedinUserId', loggedInUserId);
        setStorage('loggedInUserData', loggedInData);
        setHasStorage(token);
        navigate(COMPANY_PATH);
        notification.success(response?.message);
      } else {
        notification.info(response?.message);
      }
    },
    onError: error => {
      notification.error(`Login Failed : ${error.message}`);
    }
  });
};

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(registerUser, {
    onSuccess: response => {
      if (response) {
        notification.success(response.message);
        navigate(LOGIN_PATH);
      }
    },
    onError: error => {
      notification.error(`Registration Failed : ${error.message}`);
    }
  });
};

export const useGetAllUserData = () => {
  return useQuery('user', getUserData, {
    staleTime: Infinity,
    retry: 3,
    retryDelay: 3000
  });
};
