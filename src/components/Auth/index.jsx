import { Row, Layout, Card, Image } from 'antd';

import AuthFooter from 'components/AuthFooter';
import './index.scss';

const { Content } = Layout;

const AuthLayout = ({ children }) => {
  return (
    <Layout className="bg-image">
      <Content className="landing-screen">
        <Row className="official-logo">
          <Image src="/assets/images/logo.png" alt="main-logo" preview={false} height={100} width={200} />
        </Row>
        <Row justify={'center'} align={'middle'} className="parent-container">
          <Card className="container form-content">{children}</Card>
        </Row>
        <AuthFooter />
      </Content>
    </Layout>
  );
};

export default AuthLayout;
