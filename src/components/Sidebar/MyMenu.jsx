import { Menu } from "antd";
import {
  CodeSandboxOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selectedKeys, setSelectedKeys] = useState(["/"]);

  const items = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: "Quản lý người dùng",
    },
    {
      key: "/product",
      icon: <CodeSandboxOutlined />,
      label: "Quản lý sản phẩm",
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
    setSelectedKeys([key]);
  };

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      items={items}
      onClick={handleMenuClick}
    />
  );
};

export default MyMenu;
