import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useUpdateUserById } from 'services/query/profile';

const ProfileForm = ({ data = {}, type }) => {
  const [form] = Form.useForm();
  const updateUser = useUpdateUserById();

  useEffect(() => {
    if (type === 'edit' && data && data.user_id) {
      const { first_name, last_name, email } = data;
      form.setFieldsValue({ first_name, last_name, email });
    }
  }, [data, form]);

  const handleSubmit = async formData => {
    if (type === 'edit') {
      updateUser.mutate({ id: data?.user_id, formData });
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="First Name"
        name="first_name"
        rules={[{ required: true, message: 'Please input your First name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="last_name"
        rules={[{ required: true, message: 'Please input your Last name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input type="email" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        {type === 'edit' ? 'Update' : 'Create'}
      </Button>
    </Form>
  );
};

export default ProfileForm;
