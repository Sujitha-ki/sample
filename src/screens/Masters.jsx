import React, { useState } from "react";
import "../styles/Masters.css";
import { Tabs, Layout } from "antd";
import HeaderComponent from "../Components/HeaderComponent";
import SiderComponent from "../Components/SiderComponent";
import MasterCompany from "../Components/MasterCompany";
import MasterBranch from "../Components/MasterBranch";
import MasterUser from "../Components/MasterUser";

export default function Masters() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const onCompanySelect = (companyName) => {
    setSelectedCompany(companyName);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Company",
      children: (
        <MasterCompany
          selectedCompany={selectedCompany}
          onCompanyChange={onCompanySelect}
        />
      ),
    },
    {
      key: "2",
      label: "Branch",
      children: <MasterBranch onSelect={onCompanySelect} />,
    },
    {
      key: "3",
      label: "User",
      children: <MasterUser />,
    },
  ];
  const { Content } = Layout;
  return (
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
  );
}
