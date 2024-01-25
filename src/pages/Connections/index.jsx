import { useMemo, useState } from 'react';
import { Button, Tabs } from 'antd';

import Title from 'components/Title';
import DataGrid from 'components/DataGrid';
import { SENDREQUEST, CONNECTION_TABS, getTableColumns, connectionsData } from 'constants/connections';

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

  const handleTabChange = key => setActiveTab(key);

  const tableColumns = useMemo(() => getTableColumns(), []);

  return (
    <div>
      <Title>Connections Page</Title>
      <Tabs
        defaultActiveKey={SENDREQUEST}
        activeKey={activeTab}
        onChange={handleTabChange}
        items={CONNECTION_TABS.map(({ label, key }, i) => {
          return {
            key,
            label: <TabLabel label={label} isSelected={activeTab === key} />,
            children: <DataGrid columns={tableColumns} data={connectionsData} />
          };
        })}
      ></Tabs>
    </div>
  );
};

export default Connections;
