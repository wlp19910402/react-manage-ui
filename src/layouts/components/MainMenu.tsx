import React, { useState } from 'react'
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import MenuItem from 'antd/es/menu/MenuItem'
type MenuItem = Required<MenuProps>['items'][number]
const items: MenuItem[] = [
  {
    label: '首页',
    key: '/home',
    icon: <PieChartOutlined />,
  },
  {
    label: '关于',
    key: '/about',
    icon: <DesktopOutlined />,
  },
  {
    label: 'User',
    key: 'sub1',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Tom',
        key: '/s/3',
      },
      {
        label: 'Bill',
        key: '4',
      },
      {
        label: 'Alex',
        key: '5',
      },
    ],
  },
  {
    label: 'Team',
    key: 'sub2',
    icon: <TeamOutlined />,
    children: [
      {
        label: 'Team 1',
        key: '6',
      },
      {
        label: 'Team 2',
        key: '7',
      },
    ],
  },
  //   访问其余路径
  { label: '404', key: '*', icon: <PieChartOutlined /> },
]

const MainMenu: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  console.log(currentRoute)
  const menuClick = (e: { key: string }) => {
    // 编程式跳转
    navigateTo(e.key)
  }
  // 设置展开项目的初始值
  let firstOpenKey: string = ''
  function findKey(arr: any, pathname: string) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]!['children']?.find((item: any) => item.key === pathname)) {
        firstOpenKey = arr[i]!.key
        break
      }
    }
  }
  findKey(items, currentRoute.pathname)
  const [openKeys, setOpenKeys] = useState([firstOpenKey])
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={openKeys}
      defaultSelectedKeys={[currentRoute.pathname]} //当前选中样式 key值
      items={items}
      onClick={menuClick}
    />
  )
}

export default MainMenu
