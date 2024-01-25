import * as ROUTES from 'constants/route';

import { HomeOutlined, UserOutlined, LoginOutlined, TeamOutlined } from '@ant-design/icons';

export const getSidebarMenu = () => [
  {
    label: 'Company',
    key: ROUTES.COMPANY_PATH,
    icon: <HomeOutlined />
  },
  {
    label: 'Users',
    key: ROUTES.USERS_PATH,
    icon: <TeamOutlined />
  },
  {
    label: 'Connections',
    key: ROUTES.CONNECTIONS_PATH,
    icon: <TeamOutlined />
  }
];

export const getMenuArr = () => [
  {
    icon: <UserOutlined />,
    label: 'Profile',
    path: ROUTES.PROFILE_PATH
  },
  {
    icon: <LoginOutlined />,
    label: 'LogOut',
    path: ROUTES.LOGIN_PATH
  }
];

export const notifications = [
  {
    title: 'Congratulations, Flora!',
    message: 'Your order has been placed successfully',
    timestamp: 'Just now',
    avatarColor: '#87d068'
  },
  {
    title: 'Reminder for Meeting',
    message: 'Your meeting with Alex starts in 30 minutes',
    timestamp: '15 minutes ago',
    avatarColor: '#ff4d4f'
  }
];
