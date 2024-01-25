import { notification as AntdNotification } from 'antd';

const openNotification =
  type =>
  (message = '', description = '') => {
    AntdNotification[type]({ message, description });
  };

const notification = {
  info: openNotification('info'),
  error: openNotification('error'),
  success: openNotification('success'),
  warn: openNotification('warning')
};

export default notification;
