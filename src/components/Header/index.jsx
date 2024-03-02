/* eslint-disable react/prop-types */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const Header = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: "Chỉnh sửa thông tin",
      onClick() {
        navigate("/profile");
      },
    },
    {
      key: "2",
      label: "Đăng xuất",
      onClick() {
        navigate("/login");
      },
    },
  ];

  return (
    <Layout.Header className="header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="collapsed-button"
      />
      <div>
        <span style={{ marginRight: 10 }}>Xin chao, Huu Thang</span>
        <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }} on>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default Header;
