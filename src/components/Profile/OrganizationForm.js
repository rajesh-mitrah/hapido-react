import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useAddOrganization, useGetOrganization, useUpdateOrganization } from 'services/query/profile';

const { Option } = Select;

const OrganizationForm = ({ type, userData }) => {
  const [form] = Form.useForm();

  const [trigger, setTrigger] = useState(false);
  const [triggerGet, setTriggerGet] = useState(false);

  const userCompanyData = useGetOrganization(userData, trigger, triggerGet);
  const companyMutation = useAddOrganization(setTriggerGet);

  const updateMutation = useUpdateOrganization(setTrigger);

  useEffect(() => {
    if (userCompanyData?.data?.[0]?.company_id) {
      form.setFieldsValue(userCompanyData?.data?.[0]);
      setTrigger(false);
    }
  }, [userCompanyData, form]);

  const handleSubmit = formData => {
    if (userCompanyData?.data?.[0]?.company_id) {
      updateMutation.mutate({ id: userCompanyData?.data?.[0]?.company_id, formData });
    } else {
      companyMutation.mutate(formData);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        label="Company Name"
        name="company_name"
        rules={[{ required: true, message: 'Please input the company name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Size" name="size" rules={[{ required: true, message: 'Please select the size!' }]}>
        <Select placeholder="Select a size">
          <Option value="small">Small</Option>
          <Option value="medium">Medium</Option>
          <Option value="large">Large</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Type" name="type" rules={[{ required: true, message: 'Please input the type!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Industry" name="industry" rules={[{ required: true, message: 'Please input the industry!' }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        {userCompanyData?.data?.[0]?.company_id ? 'Update' : 'Create'}
      </Button>
    </Form>
  );
};

export default OrganizationForm;
