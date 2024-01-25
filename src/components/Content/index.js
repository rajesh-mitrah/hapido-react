import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

const Content = ({ children, ...rest }) => {
  return <AntdContent {...rest}>{children}</AntdContent>;
};

export default Content;
