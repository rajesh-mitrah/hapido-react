import { Col, Avatar, Typography, Divider } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function NotificationItem({ notification, onClear }) {
  return (
    <>
      <Col span={24} className="d-flex justify-content-between align-items-center">
        <Avatar size={50} icon={'AV'} style={{ backgroundColor: notification.avatarColor }} />
        <div className="d-flex flex-column flex-grow-1 ms-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-bold">{notification.title}</div>
              <div>{notification.message}</div>
            </div>
            <CloseOutlined className="cursor-pointer fs-5" onClick={onClear} />
          </div>
          <Text className="text-black-50">{notification.timestamp}</Text>
        </div>
      </Col>
      <Col span={24}>
        <Divider />
      </Col>
    </>
  );
}
