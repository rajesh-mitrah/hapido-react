import { Col, Row } from 'antd';

export default function PageHeader({ leftLayout, rightLayout }) {
  return (
    <Row className="my-2 p-2 pageHeader" justify={'space-between'}>
      <Col>{leftLayout}</Col>
      <Col>{rightLayout}</Col>
    </Row>
  );
}
