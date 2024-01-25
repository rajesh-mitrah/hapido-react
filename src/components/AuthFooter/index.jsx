import { Row, Col } from 'antd';
import Link from 'components/Link';

const AuthFooter = () => {
  return (
    <Row className="mt-4">
      <Col lg={12} sm={24} xs={24}>
        <Row className="d-flex mb-4" justify={'center'}>
          <span style={{ color: 'white' }}>This site is protected by</span> &nbsp;
          {<Link href="https://privacypolicy">Privacy policy</Link>}
        </Row>
      </Col>
      <Col lg={12} sm={24} xs={24}>
        <Row justify={'center'}>
          <Col sm={8} xs={16} className="mb-4 footer-links">
            <Link href="https://privacypolicy">Privacy policy</Link>
          </Col>
          <Col sm={8} xs={16} className="mb-4 footer-links">
            <Link href="https://termsandconditions">Terms and Conditions</Link>
          </Col>
          <Col sm={8} xs={16} className="mb-4 footer-links">
            <Link href="https://ca-privacynotice">CA Privacy Notice</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AuthFooter;
