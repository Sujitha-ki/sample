import React from "react";
import Search from "../assets/image/Search.svg";
import bell from "../assets/image/bell.svg";
import downarrow from "../assets/image/downarrow.svg";
import Frame from "../assets/image/Frame.svg";
import message from "../assets/image/message.svg";
import { Layout } from "antd";
import {
  SearchOutlined,
  MessageOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Input, Space, Form } from "antd";

export default function HeaderComponent() {
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <>
      <Header className="header">
        <div>
          <h3 className="heading">Masters - Company</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Input
            placeholder="Search"
            prefix={<SearchOutlined className="searchicon" />}
            className="searchicon-postion"
          />
          <MessageOutlined className="messageicon" />
          <BellOutlined className="bellicon" />
          <img src={Frame} alt="frame" style={{ width: "16", height: "16" }} />
          <DownOutlined className="downarrowicon" />
        </div>
      </Header>
    </>
  );
}
