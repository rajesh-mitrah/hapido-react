import { notification } from 'antd';
import { useQuery } from 'react-query';

import { getCountries, getRoles, getStatus } from 'services/api/lookup';

const config = {
  staleTime: Infinity,
  retry: 3, //retry count
  retryDelay: 3000 //retry delay,
};

export const useGetRoles = () => {
  return useQuery('roles', getRoles, {
    ...config,
    select: ({ data }) => {
      const roles = data.map(role => ({
        label: role.role,
        value: role.id
      }));
      return roles;
    },
    onSuccess: response => {},
    onError: error => {
      notification.error(`Failed to get User Roles : ${error.message}`);
    }
  });
};

export const useGetStatus = () => {
  return useQuery('status', getStatus, {
    ...config,
    select: ({ data }) => {
      const statuses = data.map(status => ({
        label: status.status,
        value: status.id
      }));
      return statuses;
    },
    onSuccess: response => {},
    onError: error => {
      notification.error(`Failed to get User Status : ${error.message}`);
    }
  });
};

export const useGetCountries = () => {
  return useQuery('countries', getCountries, {
    ...config,
    select: ({ data }) => {
      const countries = data.map(cty => ({
        label: cty.name,
        value: cty.id
      }));
      return countries;
    },
    onSuccess: response => {},
    onError: error => {
      notification.error(`Failed to get User Countries : ${error.message}`);
    }
  });
};
