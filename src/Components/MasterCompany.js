import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  Select,
  Divider,
  Pagination,
  Table,
} from "antd";

import sort from "../assets/image/sort.svg";
import { MoreOutlined } from "@ant-design/icons";
import "../styles/Masters.css";

export default function MasterCompany() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [selectedValue, setSelectedValue] = useState("");
  const [currentRecord, setCurrentRecord] = useState(null);
  const [form] = Form.useForm();
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  const handleRowClick = (record) => {
    setCurrentRecord(record);
    console.log("Selected Record:", record);
  };
  useEffect(() => {
    form.setFieldsValue(currentRecord);
  }, [form, currentRecord]);

  const [data, setData] = useState([
    {
      key: "1",
      companyName: "Indev Logistic",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "2",
      companyName: "Kerry Indev Logistic",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "3",
      companyName: "Kerry Indev Logistic",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "4",
      companyName: "Kerry Indev Logistic",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
  ]);
  const [sortOrder, setSortOrder] = useState({
    companyName: "ascend",
    companyRegisterNo: "ascend",
    companyAliasName: "ascend",
    phoneNo: "ascend",
    city: "ascend",
    gstNumber: "ascend",
  });
  const columns = [
    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#94A3B8" }}>Company Name</span>
          <button
            onClick={() => handleSort("companyName")}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            <img
              src={sort}
              alt="sort"
              style={{
                marginLeft: "5px",
                width: "7.140000343322754",
                height: "14",
              }}
            />
          </button>
        </div>
      ),
      dataIndex: "companyName",
      key: "companyName",
      render: (text) => (
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "500px",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0.2px",
          }}
        >
          {text}
        </span>
      ),
    },

    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#94A3B8" }}>Company Register No</span>
          <button
            onClick={() => handleSort("companyRegisterNo")}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            <img
              src={sort}
              alt="sort"
              style={{
                marginLeft: "5px",
                width: "7.140000343322754",
                height: "14",
              }}
            />
          </button>
        </div>
      ),
      dataIndex: "companyRegisterNo",
      key: "companyRegisterNo",
      render: (text) => (
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "500px",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0.2px",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#94A3B8" }}>Company Alias Name</span>
          <button
            onClick={() => handleSort("companyAliasName")}
            style={{
              background: "transparent",
              border: "none",

              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            <img
              src={sort}
              alt="sort"
              style={{
                marginLeft: "5px",
                width: "7.140000343322754",
                height: "14",
              }}
            />
          </button>
        </div>
      ),
      dataIndex: "companyAliasName",
      key: "companyAliasName",
      render: (text) => (
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "500px",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0.2px",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#94A3B8" }}>Phone No</span>
          <button
            onClick={() => handleSort("phoneNo")}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            <img
              src={sort}
              alt="sort"
              style={{
                marginLeft: "5px",
                width: "7.140000343322754",
                height: "14",
              }}
            />
          </button>
        </div>
      ),
      dataIndex: "phoneNo",
      key: "phoneNo",
      render: (text) => (
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "500px",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0.2px",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#94A3B8" }}>City</span>
          <button
            onClick={() => handleSort("city")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            <img
              src={sort}
              alt="sort"
              style={{
                marginLeft: "5px",
                width: "7.140000343322754",
                height: "14",
              }}
            />
          </button>
        </div>
      ),
      dataIndex: "city",
      key: "city",
      render: (text) => (
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "500px",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0.2px",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#94A3B8" }}>GST Number</span>
          <button
            onClick={() => handleSort("gstNumber")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              color: "#94A3B8",
            }}
          >
            <img
              src={sort}
              alt="sort"
              style={{
                marginLeft: "5px",
                width: "7.140000343322754",
                height: "14",
              }}
            />
          </button>
        </div>
      ),
      dataIndex: "gstNumber",
      key: "gstNumber",
      render: (text) => (
        <span
          style={{
            fontFamily: "Inter",
            fontWeight: "500px",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0.2px",
          }}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <MoreOutlined
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => handleRowClick(record)}
        />
      ),
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
  const handleSort = (column) => {
    const newData = [...data];
    const currentOrder = sortOrder[column];

    const sortedData = newData.sort((a, b) => {
      if (currentOrder === "ascend") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setData(sortedData);
    setSortOrder((prev) => ({
      ...prev,
      [column]: currentOrder === "ascend" ? "descend" : "ascend",
    }));
  };
  return (
    <div className="container">
      <div className="form-container">
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "125%",
            letterSpacing: "0.2px",
            textTransform: "uppercase",
          }}
        >
          Companies List
        </p>
        <Divider></Divider>

        {currentRecord && (
          <Form
            form={form}
            name="companyForm"
            className="form-layout"
            initialValues={currentRecord}
            onFinish={(values) => {
              console.log("Form Submitted:", values);
              // Handle the form submission here, e.g., update the data or make API call
            }}
          >
            {/* First Row */}
            <div className="form-row">
              <div className="form-item">
                <Form.Item
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                  ]}
                >
                  <p className="label">Company Name</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="companyAliasName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company alias!",
                    },
                  ]}
                >
                  <p className="label">Company Alias Name</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="companyRegisterNo"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company register number!",
                    },
                  ]}
                >
                  <p className="label">Company Register Number</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="companyCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company code!",
                    },
                  ]}
                >
                  <p className="label">Company Code</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
            </div>

            {/* Second Row */}
            <div className="form-row">
              <div className="form-item">
                <Form.Item
                  name="gstNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your GST number!",
                    },
                  ]}
                >
                  <p className="label">GST Number</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="panNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your PAN number!",
                    },
                  ]}
                >
                  <p className="label">PAN Number</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="phoneNo"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <p className="label">Phone Number</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <p className="label">Email Id</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
            </div>

            {/* Third Row */}
            <div className="form-row">
              <div className="form-item">
                <Form.Item
                  name="addressLine1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address line 1!",
                    },
                  ]}
                >
                  <p className="label">Address Line 1</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <Form.Item
                  name="addressLine2"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address line 2!",
                    },
                  ]}
                >
                  <p className="label">Address Line 2</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <Form.Item
                  name="addressLine3"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address line 3!",
                    },
                  ]}
                >
                  <p className="label">Address Line 3</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <Form.Item
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input your city!",
                    },
                  ]}
                >
                  <p className="label">City</p>
                  <select id="city" className="input-field">
                    <option value="" disabled selected>
                      Select a city
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                  </select>
                </Form.Item>
              </div>
            </div>

            {/* Fourth Row */}
            <div className="form-row">
              <div className="form-item">
                <Form.Item
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: "Please input your state!",
                    },
                  ]}
                >
                  <p className="label">State</p>
                  <select id="state" className="input-field">
                    <option value="" disabled selected>
                      Select a state
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamilnadu">Tamil Nadu</option>
                    <option value="westBengal">West Bengal</option>
                  </select>
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please input your country!",
                    },
                  ]}
                >
                  <p className="label">Country</p>
                  <select id="country" className="input-field">
                    <option value="" disabled selected>
                      Select a country
                    </option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="canada">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="australia">Australia</option>
                  </select>
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="pincode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your pincode!",
                    },
                  ]}
                >
                  <p className="label">Pincode</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="contactPerson"
                  rules={[
                    {
                      required: true,
                      message: "Please input contact person name!",
                    },
                  ]}
                >
                  <p className="label">Contact Person"</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
            </div>

            {/* Fifth Row */}
            <div className="form-row">
              <div className="form-item">
                <Form.Item
                  name="contactPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please input contact person phone!",
                    },
                  ]}
                >
                  <p className="label">Contact Person Phone</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  name="contactEmail"
                  rules={[
                    {
                      required: true,
                      message: "Please input contact person email!",
                    },
                  ]}
                >
                  <p className="label">Contact Person Email</p>
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item name="uploadDocuments">
                  <p className="label">Upload Documents</p>
                  <Upload>
                    <Button className="upload-btn">Upload</Button>
                  </Upload>
                </Form.Item>
              </div>
              <div className="form-item"></div>
            </div>
            {/* Submit button */}
            <div className="btn-container">
              <div className="btn-item">
                <button type="button" className="cancel-button">
                  CANCEL
                </button>
                <Button type="primary" htmlType="submit">
                  SUBMIT
                </Button>
              </div>
            </div>
          </Form>
        )}
      </div>
      <div className="table-container">
        <p
          style={{
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "125%",
            letterSpacing: "0.2px",
            textTransform: "uppercase",
          }}
        >
          Companies List
        </p>
        <div className="table">
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
            className="table-with-column-divider"
          />
        </div>
        <div className="pagination-container">
          <Pagination
            showSizeChanger={false}
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            total={500}
          />
        </div>
      </div>
    </div>
  );
}
