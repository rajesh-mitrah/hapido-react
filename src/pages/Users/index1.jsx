import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Table from 'components/Table';
import Button from 'components/Button';
import { columns } from 'constants/userTableColumns';
import { useGetAllUsers } from 'services/query/user';
import { ModalContext } from 'context/modalContext';
import { USER_EDIT_MODAL, USER_ADD_MODAL, USER_DELETE_MODAL } from 'constants/modalType';
import Loader from 'components/Loader';
import { useGetRoles, useGetStatus } from 'services/query/lookup';
import { useEffect } from 'react';

const Users = () => {
  const { t } = useTranslation();
  const { showModal } = useContext(ModalContext);

  const { data: users = [], isLoading: isUsersLoading } = useGetAllUsers();
  const { isLoading: isRolesLoading } = useGetRoles();
  const { isLoading: isStatusLoading } = useGetStatus();

  const openEditModal = useCallback(
    record => () => {
      showModal({
        modalType: USER_EDIT_MODAL,
        modalProps: { type: 'EDIT', initialValues: record }
      });
    },
    [showModal]
  );

  // const userColumns = useMemo(() => {
  //   return columns({ t, openEditModal });
  // }, [t, openEditModal]);

  const openAddModal = () => {
    showModal({
      modalType: USER_ADD_MODAL,
      modalProps: { type: 'Add User' }
    });
  };

  const handleDeleteModal = useCallback(
    record => () => {
      showModal({
        modalType: USER_DELETE_MODAL,
        modalProps: { type: 'Delete', recordToDelete: record }
      });
    },
    [showModal]
  );

  const userColumns = useMemo(() => {
    return columns({ t, openEditModal, handleDeleteModal });
  }, [t, openEditModal, handleDeleteModal]);

  return (
    <div>
      <Button className="" onClick={() => openAddModal()}>
        Add User
      </Button>
      <Loader loading={isRolesLoading || isStatusLoading}>
        <Table /* dataSource={users ?? []} */ columns={userColumns} loading={isUsersLoading} />
      </Loader>
    </div>
  );
};

export default Users;
