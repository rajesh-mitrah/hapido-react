import { useMemo, useState } from 'react';
import { Button, Tabs } from 'antd';

import Title from 'components/Title';
import DataGrid from 'components/DataGrid';
import { SENDREQUEST, CONNECTION_TABS, getTableColumns, connectionsData } from 'constants/connections';
import { useGetCompanyList, useGetConnections, useRequestedData } from 'services/query/company';
import { useGetAllConnectionData } from 'services/query/user';

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

  const connectionsData = useGetConnections();
  const companyList = useGetCompanyList();
  const connectData = useGetAllConnectionData();
  const receiveRequestData = useRequestedData();

  // const sendRequestData = useMemo(() => companyList?.data?.filter((item) => connectionsData?.data?.some((i) => item.company_id == i.request_company_id)));

  // const receiveRequestData = [
  // ];

  const handleAccept = id => {
    console.log('Accepted', id);
  };

  const handleReject = id => {
    console.log('Rejected', id);
  };

  const tableColumns = useMemo(() => {
    return getTableColumns(activeTab, handleAccept, handleReject);
  }, [activeTab]);

  const handleTabChange = key => setActiveTab(key);

  const getData = () => {
    return activeTab === SENDREQUEST ? companyList?.data?.data || [] : receiveRequestData?.data?.response || [];
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
