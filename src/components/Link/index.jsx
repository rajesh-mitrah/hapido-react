import { Typography } from 'antd';

const { Link: AntdLink } = Typography;

const Link = ({ children, ...rest }) => {
  return <AntdLink {...rest}>{children}</AntdLink>;
};

export default Link;
