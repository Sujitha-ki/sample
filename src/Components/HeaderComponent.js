import React from "react";
import Search from "../assets/image/Search.svg";
import bell from "../assets/image/bell.svg";
import downarrow from "../assets/image/downarrow.svg";
import Frame from "../assets/image/Frame.svg";
import message from "../assets/image/message.svg";
import { Layout } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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
            prefix={<SearchOutlined />}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          />
          {/* <img
            src={Search}
            alt="search"
            style={{
              width: "16",
              height: "16",
            }}
          /> */}
          <img
            src={message}
            alt="message"
            style={{
              width: "16",
              height: "16",
            }}
          />
          <img
            src={bell}
            alt="bell"
            style={{
              width: "16",
              height: "16",
            }}
          />
          <img src={Frame} alt="frame" style={{ width: "16", height: "16" }} />
          <img
            src={downarrow}
            alt="downarrow"
            style={{
              width: "16",
              height: "16",
            }}
          />
        </div>
      </Header>
    </>
  );
}
