import React, { useState, useMemo } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useRegister } from 'services/query/auth';
import CustomInput from 'components/Input';
import { useGetUserByID } from 'services/query/profile';
import { useDeleteQuery, useGetAllUserData } from 'services/query/user';

const UserManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const userData = useGetAllUserData();
  const loggedinUserId = localStorage.getItem('loggedinUserId');
  const userProfileData = useGetUserByID(loggedinUserId);
  const registerMutation = useRegister();
  const deleteQuery = useDeleteQuery();

  const allUserData = useMemo(
    () => userData?.data?.filter(item => item?.company_id == userProfileData.company_id),
    [userData, userProfileData]
  );

  const showAddUserModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAddOrEditUser = values => {
    registerMutation.mutate(values);
    setIsModalVisible(false);
    form.resetFields();
  };
  const deleteUser = user => {
    Modal.confirm({
      title: 'Are you sure delete this user?',
      content: `User: ${user.first_name} ${user.last_name}`,
      onOk() {
        deleteQuery.mutate(user.user_id);
      },
      onCancel() {
        console.log('Cancel delete');
      }
    });
  };

  const columns = useMemo(
    () => [
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
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (_, record) => (
          <>
            <Button icon={<DeleteOutlined />} onClick={() => deleteUser(record)} />
          </>
        )
      }
    ],
    [deleteUser]
  );

  return (
    <div>
      <Button type="primary" onClick={showAddUserModal}>
        Add User
      </Button>
      <Modal title={'Add User'} open={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form form={form} layout="vertical" onFinish={handleAddOrEditUser}>
          <Form.Item name="first_name" label="First Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="last_name" label="Last Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          {
            <>
              <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input.Password />
              </Form.Item>
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
                        return Promise.reject('The two passwords that you entered do not match!');
                      }
                      return Promise.resolve();
                    }
                  })
                ]}
              />
            </>
          }
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
