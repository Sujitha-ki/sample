import React from "react";
import Search from "../assets/image/Search.svg";
import { Layout } from "antd";
export default function HeaderComponent() {
  const { Header } = Layout;
  return (
    <>
      <Header className="header">
        <div>
          <h3 className="heading">Masters - Company</h3>
        </div>
        <div>
          <img src={Search} alt="search" />
        </div>
      </Header>
    </>
  );
}
