import { useMemo, useState } from 'react';
import { Button, Tabs } from 'antd';

import Title from 'components/Title';
import DataGrid from 'components/DataGrid';
import { SENDREQUEST, CONNECTION_TABS, getTableColumns } from 'constants/connections';
import { useGetSendList, useRequestedData, useUpdateStatus } from 'services/query/company';
import { useGetUserByID } from 'services/query/profile';

const TabLabel = ({ label, isSelected }) => (
  <>
    <Button
      type={isSelected ? 'default' : 'text'}
      className={`d-flex align-items-center mx-0 ${isSelected ? 'btn' : ''}`}
    >
      {label}
    </Button>
  </>
);

const Connections = () => {
  const [activeTab, setActiveTab] = useState(SENDREQUEST);

  const loggedinUserId = localStorage.getItem('loggedinUserId');
  const userProfileData = useGetUserByID(loggedinUserId);
  const connectionsData = useGetSendList({ id: userProfileData?.data?.company_id });
  const updateStatus = useUpdateStatus();
  const receiveRequestData = useRequestedData({ id: userProfileData?.data?.company_id });

  const handleAccept = id => {
    updateStatus.mutate({
      company_id: id,
      request_company_id: userProfileData?.data?.company_id,
      status: 'Accepted'
    });
  };

  const handleReject = id => {
    updateStatus.mutate({
      company_id: id,
      request_company_id: userProfileData?.data?.company_id,
      status: 'Rejected'
    });
  };

  const tableColumns = useMemo(() => {
    return getTableColumns(activeTab, handleAccept, handleReject);
  }, [activeTab]);

  const handleTabChange = key => setActiveTab(key);

  const getData = () => {
    return activeTab === SENDREQUEST ? connectionsData?.data?.data || [] : receiveRequestData?.data?.response || [];
  };

  return (
    <div>
      <Title>Connections Page</Title>
      <Tabs
        defaultActiveKey={SENDREQUEST}
        activeKey={activeTab}
        onChange={handleTabChange}
        items={CONNECTION_TABS.map(({ label, key }) => ({
          key,
          label: <TabLabel label={label} isSelected={activeTab === key} />,
          children: <DataGrid columns={tableColumns} data={getData()} />
        }))}
      ></Tabs>
    </div>
  );
};

export default Connections;
