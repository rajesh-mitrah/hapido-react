import { useContext } from 'react';
import { Modal as AntdModal } from 'antd';

import { ModalContext } from 'context/modalContext';

const Modal = ({ children, handleOk = () => {}, handleCancel = () => {}, modalType = null, title = '', ...rest }) => {
  const { hideModal } = useContext(ModalContext);
  const onCancel = () => {
    if (modalType) {
      hideModal({ modalType });
    } else {
      hideModal();
    }
    handleCancel();
  };
  return (
    <AntdModal title={title} open={true} onOk={handleOk} onCancel={onCancel} {...rest}>
      {children}
    </AntdModal>
  );
};

export default Modal;
