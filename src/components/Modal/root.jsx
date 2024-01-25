import { useContext } from 'react';
import isEmpty from 'lodash/isEmpty';

import { ModalContext } from 'context/modalContext';

import UserAddModal from 'pages/Users/Add';
import UserEditModal from 'pages/Users/Edit';
import UserDeleteModal from 'pages/Users/delete';

const MODAL_COMPONENTS = {
  USER_ADD_MODAL: UserAddModal,
  USER_EDIT_MODAL: UserEditModal,
  USER_DELETE_MODAL: UserDeleteModal
};

const ModalRoot = () => {
  const { modalType, modalProps } = useContext(ModalContext);
  if (isEmpty(modalType)) return <span />;
  return modalType.map((item, index) => {
    const SpecificModal = MODAL_COMPONENTS[item];
    return <SpecificModal key={index} {...modalProps[index]} />;
  });
};

export default ModalRoot;
