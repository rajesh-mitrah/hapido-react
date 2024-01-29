import { Tag, Button, Popconfirm } from 'antd';

export const getTableColumns = handleSendRequest => {
  return [
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
    },
    {
      key: '5',
      title: 'Status',
      dataIndex: 'status',
      render: (status, record) => {
        switch (status) {
          case 'Pending':
            return <Tag color="orange">Pending</Tag>;
          case 'Accepted':
            return <Tag color="green">Accepted</Tag>;
          default:
            return (
              <Popconfirm
                title="Are you sure to send a request?"
                onConfirm={() => handleSendRequest(record)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">Send Request</Button>
              </Popconfirm>
            );
        }
      }
    }
  ];
};
