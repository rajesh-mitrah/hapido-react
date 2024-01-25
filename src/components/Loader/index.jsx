import { Spin } from 'antd';

const Loader = ({ loading = false, size = 'small', message = '', children }) => {
  return (
    <Spin spinning={loading} size={size} tip={message}>
      {children}
    </Spin>
  );
};

export default Loader;
