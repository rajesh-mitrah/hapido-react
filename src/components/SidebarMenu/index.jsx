import { useEffect, useState, useMemo, useCallback } from 'react';

import { Menu as AntdMenu, Tooltip } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SidebarMenu({
  menuItems = [],
  mode = 'inline',
  collapsed = false,
  menuPlacement = 'right',
  ...rest
}) {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location]);

  const handleSidebarMenu = item => {
    navigate(item.key);
  };

  const renderMenuLabel = useCallback(
    (label, hasSubmenu) => {
      if (!collapsed && hasSubmenu) {
        return (
          <Tooltip title={label} placement={menuPlacement}>
            {label}
          </Tooltip>
        );
      }
      return label;
    },
    [collapsed, menuPlacement]
  );

  const constructMenuItems = useCallback(
    (items, isNested = false) => {
      return items.map(({ key, icon, label, submenu }) => {
        const hasSubmenu = submenu?.length;
        return {
          key,
          icon,
          label: renderMenuLabel(label, isNested),
          ...(hasSubmenu && { children: constructMenuItems(submenu, true) })
        };
      });
    },
    [renderMenuLabel]
  );

  const listOfItems = useMemo(() => constructMenuItems(menuItems), [menuItems, constructMenuItems]);

  return (
    <AntdMenu
      key={collapsed ? 'collapsed' : 'expand'}
      selectedKeys={selectedKeys}
      mode={mode}
      onClick={handleSidebarMenu}
      items={listOfItems}
      theme="dark"
      {...rest}
    />
  );
}
