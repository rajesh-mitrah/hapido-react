import { DeleteOutlined } from '@ant-design/icons';
import Link from 'components/Link';

export const columns = ({ t, openEditModal, handleDeleteModal }) => [
  {
    title: 'first_name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (name, record) => {
      return <Link onClick={openEditModal(record)}>{name}</Link>;
    }
  },
  {
    title: 'last_name',
    dataIndex: 'last_name',
    key: 'last_name',
    render: (name, record) => {
      return <Link onClick={openEditModal(record)}>{name}</Link>;
    }
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    key: 'action',
    title: 'Action',
    dataIndex: 'id',
    align: 'center',
    render: (_, record) => <DeleteOutlined className="text-danger cursor-pointer" onClick={handleDeleteModal(record)} />
  }
];
