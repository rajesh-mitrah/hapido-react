import { useState } from 'react';
import { Layout } from 'antd';

import { getSidebarMenu } from 'constants/header';
import SidebarMenu from 'components/SidebarMenu';

import './index.scss';

const { Sider: AntdSider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarMenu = getSidebarMenu();

  return (
    <AntdSider
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      className="sider"
      collapsedWidth="80"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={setCollapsed}
    >
      <SidebarMenu menuItems={sidebarMenu} collapsed={collapsed} />
    </AntdSider>
  );
}
