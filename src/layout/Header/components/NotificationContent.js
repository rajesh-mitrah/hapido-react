import { forwardRef } from 'react';
import { Card, Row, Col } from 'antd';
import NotificationItem from './NotificationItem';

const NotificationContent = forwardRef(({ notificationData, clearNotification }, ref) => {
  return (
    <Card
      onClick={e => e.stopPropagation()}
      style={{ minWidth: '400px' }}
      ref={ref}
      className="custom-popover-content shadow-1"
      title="Notifications"
    >
      <Row gutter={[16, 16]} justify="center">
        {notificationData.length ? (
          notificationData.map((notification, index) => (
            <NotificationItem key={index} notification={notification} onClear={() => clearNotification(index)} />
          ))
        ) : (
          <Col>No notifications</Col>
        )}
      </Row>
    </Card>
  );
});

export default NotificationContent;
