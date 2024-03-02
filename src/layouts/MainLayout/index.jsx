import { useState } from "react";
import { Layout } from "antd";
const { Content } = Layout;

import "./style.scss";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="main-layout">
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
