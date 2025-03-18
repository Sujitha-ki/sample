import React from "react";
import "../styles/Masters.css";
import { Tabs, Layout } from "antd";
import HeaderComponent from "../Components/HeaderComponent";
import SiderComponent from "../Components/SiderComponent";
import MasterCompany from "../Components/MasterCompany";
import MasterBranch from "../Components/MasterBranch";
import MasterUser from "../Components/MasterUser";

export default function Masters() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Company",
      //   children:,
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
  return <div className="main-container"></div>;
}
