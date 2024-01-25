import { Card as AntdCard } from 'antd';

const Card = ({ title, children, ...rest }) => {
  return (
    <AntdCard title={title} {...rest}>
      {children}
    </AntdCard>
  );
};

export default Card;
