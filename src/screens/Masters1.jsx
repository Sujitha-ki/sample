import React from "react";
import "../styles/Masters.css";
import { Flex, Layout, Tabs } from "antd";
import HeaderComponent from "../Components/HeaderComponent";
import SiderComponent from "../Components/SiderComponent";
import MasterCompany from "../Components/MasterCompany";
import MasterBranch from "../Components/MasterBranch";
import MasterUser from "../Components/MasterUser";

export default function Masters() {
  const { Content } = Layout;
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Company",
      children: <MasterCompany />,
    },
    {
      key: "2",
      label: "Branch",
      children: <MasterBranch />,
    },
    {
      key: "3",
      label: "User",
      children: <MasterUser />,
    },
  ];

  return (
    <div>
      <Layout className="layout">
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content className="content">
            <div className="tabs-container">
              <Tabs
                className="tabs"
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
