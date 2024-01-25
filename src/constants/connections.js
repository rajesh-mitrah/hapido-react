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

export const getTableColumns = () => {
  return [
    {
      key: '1',
      title: 'Company Name',
      dataIndex: 'companyName',
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
      title: 'location',
      dataIndex: 'location'
    },
    {
      key: '4',
      title: 'Industry',
      dataIndex: 'industry'
    }
  ];
};

export const connectionsData = [
  { id: 1, companyName: 'Company ABC', size: 'Small', industry: 'Industry 1', status: '', location: 'Chennai' },
  { id: 2, companyName: 'Company xyz', size: 'Medium', industry: 'Industry 2', status: 'Accepted', location: 'Madurai' }
];
