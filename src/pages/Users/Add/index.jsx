import { Form } from 'antd';
import Modal from 'components/Modal';
import UserForm from 'components/UserForm';
import { useRegister } from 'services/query/auth';

const UserAddModal = () => {
  const [form] = Form.useForm();
  const registerMutation = useRegister();

  const handleOk = () => {
    form.submit();
  };
  const onFinish = values => {
    const userDetails = {
      email: values.email,
      password: values.password,
      firstName: values.first_name,
      lastName: values.last_name,
      dob: '1995-04-03'
    };

    registerMutation.mutate(userDetails);
  };
  return (
    <Modal title="Add User" handleOk={handleOk}>
      <UserForm form={form} onFinish={onFinish} type="create" />
    </Modal>
  );
};

export default UserAddModal;
