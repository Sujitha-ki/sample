import React, { useState } from "react";
import { Layout, Menu } from "antd";
import ContractActive from "../assets/image/ContractActive.svg";
import MastersActive from "../assets/image/MastersActive.svg";
import OverviewActive from "../assets/image/OverviewActive.svg";
import SettingActive from "../assets/image/SettingActive.svg";
import logout from "../assets/image/logout.svg";
import logo from "../assets/image/logo.svg";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    getItem(
      "Overview",
      "1",
      <img
        src={OverviewActive}
        alt="Overview"
        style={{ width: "16px", height: "16px" }}
      />
    ),
    getItem(
      "Masters",
      "2",
      <img
        src={MastersActive}
        alt="Masters"
        style={{ width: "16px", height: "16px" }}
      />
    ),
    getItem(
      "Contract",
      "3",
      <img
        src={ContractActive}
        alt="Contract"
        style={{ width: "16px", height: "16px" }}
      />
    ),
    getItem(
      "Settings",
      "4",
      <img
        src={SettingActive}
        alt="settings"
        style={{ width: "16px", height: "16px" }}
      />
    ),
    getItem(
      "logout",
      "5",
      <img
        src={logout}
        alt="logout"
        style={{ width: "16px", height: "16px" }}
      />
    ),
  ];

  return (
    <Sider
      className="sider"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className="demo-logo-vertical" />
      <img src={logo} alt="logo" />
      <Menu
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default SiderComponent;
