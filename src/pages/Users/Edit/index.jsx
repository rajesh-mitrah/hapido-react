import { useEffect } from 'react';
import { Form } from 'antd';

import Modal from 'components/Modal';
import UserForm from 'components/UserForm';
import { useUpdateQuery } from 'services/query/user';

const UserEditModal = ({ initialValues, type }) => {
  const userMutation = useUpdateQuery();

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  const handleOk = () => {
    form.submit();
  };

  const onFinish = values => {
    const mappingData = {
      userId: initialValues.id,
      updatedData: { phone: '9566450632', updated_by: 'admin', ...values }
    };
    userMutation.mutate(mappingData);
  };
  return (
    <Modal title="Edit User" handleOk={handleOk}>
      <UserForm form={form} type={type} onFinish={onFinish} />
    </Modal>
  );
};

export default UserEditModal;
