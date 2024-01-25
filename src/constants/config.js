import { notification, message } from 'antd';

const notificationConfig = {
  placement: 'topRight',
  top: 30,
  duration: 4
};

const toastConfig = {
  top: 30,
  duration: 4,
  maxCount: 1
};

message.config(toastConfig);
notification.config(notificationConfig);
