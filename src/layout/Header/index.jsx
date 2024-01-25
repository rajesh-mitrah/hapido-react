import { useState, useContext } from 'react';
import { Layout, Row, Col, Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { removeStorage } from '../../services/storage';
import { AuthContext } from '../../context/authContext';
import ProfilePopoverContent from './components/ProfilePopoverContent';
import { getMenuArr } from 'constants/header';
import { LOGIN_PATH } from 'constants/route';

const { Header } = Layout;

export default function CustomHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setHasStorage } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleMenuClick = path => {
    if (path === LOGIN_PATH) {
      removeStorage('authToken');
      removeStorage('loggedinUserId');
      removeStorage('loggedInUserData');
      setHasStorage(false);
    }
    navigate(path);
    setIsMenuOpen(false);
  };

  const headerProfileIcon = () => {
    return <ProfilePopoverContent menuArr={getMenuArr()} onMenuClick={handleMenuClick} />;
  };

  const handleMenuOpenChange = newOpen => {
    setIsMenuOpen(newOpen);
  };

  return (
    <Header className="header px-2">
      <Row justify={'space-between'} align="middle">
        <img src="/assets/images/logo.png" className="home-screen-logo" alt="mainlogo" />
        <Row align="middle" gutter={[16, 0]}>
          <Col>
            <Popover
              trigger="click"
              open={isMenuOpen}
              placement="bottom"
              content={headerProfileIcon}
              onOpenChange={handleMenuOpenChange}
              overlayInnerStyle={{ padding: 0, marginRight: '0.5rem' }}
            >
              <Avatar size={40} className="cursor-pointer" icon={<UserOutlined />} />
            </Popover>
          </Col>
        </Row>
      </Row>
    </Header>
  );
}
