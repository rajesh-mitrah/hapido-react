import { Card, Row, Col, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { getStorage } from 'services/storage';
const { Text } = Typography;

export default function ProfilePopoverContent({ menuArr, onMenuClick }) {
  const userData = getStorage('loggedInUserData');

  return (
    <Card className="shadow-1">
      <Row align="middle" justify="center" className="profile-info">
        <Col>
          <Avatar size={50} icon={<UserOutlined />} />
        </Col>
        <Col className="mx-2 d-flex flex-column">
          <Text className="fs-6 fw-bold">{userData?.userName}</Text>
          <Text className="text-secondary">{userData?.userEmail}</Text>
        </Col>
      </Row>
      {menuArr.map((item, index) => (
        <Row
          key={index}
          align="middle"
          justify="center"
          className={'menu-item cursor-pointer mt-2 mx-2'}
          onClick={() => onMenuClick(item.path)}
        >
          <Col>
            <Text>{item.icon}</Text>
          </Col>
          <Col flex="auto">
            <Text className="px-3">{item.label}</Text>
          </Col>
        </Row>
      ))}
    </Card>
  );
}
