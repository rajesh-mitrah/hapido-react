import React, { useState, useMemo } from 'react';

import { Table, Button, Modal, Form, Input } from 'antd';
import { useGetAllUserData, useRegister } from 'services/query/auth';
import CustomInput from 'components/Input';
import { useGetUserByID } from 'services/query/profile';

const UserManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const userData = useGetAllUserData();

  const loggedinUserId = localStorage.getItem('loggedinUserId');

  const userProfileData = useGetUserByID(loggedinUserId);

  const registerMutation = useRegister();

  const showAddUserModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const allUserData = useMemo(
    () => userData?.data?.filter(item => item?.company_id == userProfileData.company_id),
    [userData, userProfileData]
  );

  const handleAddUser = async values => {
    registerMutation.mutate(values);
    setIsModalVisible(false);
    form.resetFields();
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'lastName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }
  ];

  return (
    <div>
      <Button type="primary" onClick={showAddUserModal}>
        Add User
      </Button>
      <Modal title="Add User" open={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form form={form} layout="vertical" onFinish={handleAddUser}>
          <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          {/* <Form.Item> */}
          <CustomInput
            placeholder="Confirm Password"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            min={8}
            rules={[
              { required: true, message: 'Please enter your Confirm Password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value && getFieldValue('password') !== value) {
                    return Promise.reject('The new password that you entered do not match');
                  }
                  return Promise.resolve();
                }
              })
            ]}
          />
          {/* </Form.Item> */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
      <Table dataSource={allUserData} columns={columns} />
    </div>
  );
};

export default UserManagement;
