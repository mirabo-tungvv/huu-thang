/* eslint-disable react/prop-types */
import Sider from "antd/es/layout/Sider";
import MyMenu from "./MyMenu";

const Sidebar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <MyMenu />
    </Sider>
  );
};

export default Sidebar;
