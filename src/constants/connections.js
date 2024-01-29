import Button from 'components/Button';

export const SENDREQUEST = 'SendRequest';
export const RECEIVEREQUEST = 'ReceiveRequest';

export const CONNECTION_TABS = [
  {
    key: 'SendRequest',
    label: SENDREQUEST
  },
  {
    key: 'ReceiveRequest',
    label: RECEIVEREQUEST
  }
];

export const getTableColumns = (activeTab, handleAccept, handleReject) => {
  let columns = [
    {
      key: '1',
      title: 'Company Name',
      dataIndex: 'company_name',
      sorter: true,
      render: (name, record) => <div>{name}</div>
    },
    {
      key: '2',
      title: 'Size',
      dataIndex: 'size'
    },
    {
      key: '3',
      title: 'Type',
      dataIndex: 'type'
    },
    {
      key: '4',
      title: 'Industry',
      dataIndex: 'industry'
    }
  ];
  if (activeTab === RECEIVEREQUEST) {
    columns.push({
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => handleAccept(record.id)}>Accept</Button>
          <Button onClick={() => handleReject(record.id)}>Reject</Button>
        </>
      )
    });
  }
  return columns;
};

export const connectionsData = [
  { id: 1, companyName: 'Company ABC', size: 'Small', industry: 'Industry 1', status: '', location: 'Chennai' },
  { id: 2, companyName: 'Company xyz', size: 'Medium', industry: 'Industry 2', status: 'Accepted', location: 'Madurai' }
];
