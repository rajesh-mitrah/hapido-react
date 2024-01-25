import notification from 'components/Notification';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  addOrganization,
  getOrganizationDetails,
  getUserById,
  updateCompanyById,
  updateUserById
} from 'services/api/profile';

const useInvalidate = () => {
  const queryClient = useQueryClient();
  const invalidateEmployee = () => {
    queryClient.invalidateQueries('organization');
  };
  return { invalidateEmployee };
};

export const useAddOrganization = setTriggerGet => {
  const { invalidateEmployee } = useInvalidate();

  return useMutation(addOrganization, {
    onSuccess: response => {
      if (response) {
        notification.info(response.message);
        invalidateEmployee();
        setTriggerGet(true);
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useUpdateOrganization = () => {
  const { invalidateEmployee } = useInvalidate();

  return useMutation(updateCompanyById, {
    onSuccess: response => {
      if (response) {
        invalidateEmployee();
        notification.info(response.message);
      }
    },
    onError: error => {
      notification.error(`Update Failed : ${error.message}`);
    }
  });
};

export const useUpdateUserById = () => {
  return useMutation(updateUserById, {
    onError: error => {
      notification.error(error?.message);
    },
    onSuccess: data => {
      if (data) {
        notification.success(data?.message);
      }
    }
  });
};

export const useGetOrganization = (params, trigger, triggerGet) => {
  const query = useQuery(['organization', params, trigger, triggerGet], () => getOrganizationDetails(params));
  return query;
};

export const useGetUserByID = params => {
  const query = useQuery(['user', params], () => getUserById(params));
  return query;
};
