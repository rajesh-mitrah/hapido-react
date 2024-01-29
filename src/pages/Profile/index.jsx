import React, { useState, useMemo } from 'react';
import { Row, Col, Tabs } from 'antd';
import { UserOutlined, ApartmentOutlined } from '@ant-design/icons';
import Button from 'components/Button';
import Card from 'components/Card';
import Content from 'components/Content';
import Title from 'components/Title';
import ProfileForm from 'components/Profile/ProfileForm';
import OrganizationForm from 'components/Profile/OrganizationForm';
import { useGetOrganization, useGetUserByID } from 'services/query/profile';

import './index.scss';

const TabLabel = ({ icon: Icon, label, isSelected }) => (
  <Button type={isSelected ? 'default' : 'text'} className={`d-flex align-items-center ${isSelected ? 'btn' : ''}`}>
    <Icon />
    <span className="mx-0">{label}</span>
  </Button>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const loggedinUserId = localStorage.getItem('loggedinUserId');

  const type = loggedinUserId ? 'edit' : 'create';

  const userProfileData = useGetUserByID(loggedinUserId);

  const filteredTabConfig = useMemo(
    () => [
      {
        key: 'profile',
        label: 'Profile',
        icon: UserOutlined,
        component: ProfileForm,
        data: userProfileData.data,
        type: type
      },
      {
        key: 'organization',
        label: 'Organization',
        icon: ApartmentOutlined,
        component: OrganizationForm,
        userData: userProfileData.data?.company_id,
        type: type
      }
    ],
    [userProfileData, type]
  );

  const handleOnchange = key => setActiveTab(key);

  return (
    <Row>
      <Content>
        <Title>Profile Page</Title>
        <Col span={12}>
          <Card classname="shadow-1">
            <Tabs
              defaultActiveKey="profile"
              activeKey={activeTab}
              onChange={handleOnchange}
              items={filteredTabConfig.map(
                ({ key, label, icon: Icon, component: Component, type, userData, data }) => ({
                  key,
                  label: <TabLabel icon={Icon} label={label} isSelected={activeTab === key} />,
                  children: <Component type={type} data={data} userData={userData} />
                })
              )}
            />
          </Card>
        </Col>
      </Content>
    </Row>
  );
};

export default Profile;
