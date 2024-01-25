import { Layout, Row, Col } from 'antd';

import Sidebar from 'layout/Sidebar';
import Header from 'layout/Header';
import Content from 'layout/Content';
import ModalContextProvider from 'context/modalContext';
import ModalRoot from 'components/Modal/root';

const { Content: AntdContent } = Layout;

export default function LayoutElement() {
  return (
    <ModalContextProvider>
      <Layout className="vh-100 layoutWrapper">
        <Header />
        <Layout className="d-flex">
          <Sidebar />
          <AntdContent className="d-flex flex-direction-column flex-grow-1">
            <Row className="flex-grow-1 overflow-y-auto">
              <Col span={24} className="contentWrapper">
                <Content />
              </Col>
            </Row>
          </AntdContent>
        </Layout>
      </Layout>
      <ModalRoot />
    </ModalContextProvider>
  );
}
