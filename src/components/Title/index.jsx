import { Typography } from 'antd';

const { Title } = Typography;

const CustomTitle = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

export default CustomTitle;
