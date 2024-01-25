import { Table as AntdTable } from 'antd';

const Table = ({ dataSource, columns, loading }) => {
  return <AntdTable dataSource={dataSource} columns={columns} loading={loading} />;
};

export default Table;
