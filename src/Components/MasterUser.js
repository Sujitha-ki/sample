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
  message,
  Switch,
} from "antd";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import trash from "../assets/image/trash.svg";
import lock from "../assets/image/lock.svg";
import "../styles/Masters.css";

export default function MasterUser() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [currentRecord, setCurrentRecord] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [companyCategorySelects, setCompanyCategorySelects] = useState([]);
  const [userMappingSelects, setUserMappingSelects] = useState([]);
  const [moved, setMoved] = useState(false);
  const [buttonText, setButtonText] = useState("NEW USER");
  const [data, setData] = useState([
    {
      key: "1",
      companyName: "Indev Logistic",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "2",
      companyName: "Kerry Indev Logistic2",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "3",
      companyName: "Kerry Indev Logistic3",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "4",
      companyName: "Kerry Indev Logistic4",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "5",
      companyName: "Kerry Indev Logistic5",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "6",
      companyName: "Kerry Indev Logistic6",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "7",
      companyName: "Kerry Indev Logistic7",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "8",
      companyName: "Kerry Indev Logistic8",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "9",
      companyName: "Kerry Indev Logistic9",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "10",
      companyName: "Kerry Indev Logistic10",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
    {
      key: "11",
      companyName: "Kerry Indev Logistic11",
      branchName: "KIL",
      userName: "Arun Kumar",
      userID: "51234",
      phoneNo: "+91 88888 88888",
      email: "arunkumar123@gamil.com",
      Roles: "Admin",
    },
  ]);

  const companies = [
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
      companyName: "Kerry Indev Logistic2",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "3",
      companyName: "Kerry Indev Logistic3",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "4",
      companyName: "Kerry Indev Logistic4",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "5",
      companyName: "Kerry Indev Logistic5",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "6",
      companyName: "Kerry Indev Logistic6",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "7",
      companyName: "Kerry Indev Logistic7",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "8",
      companyName: "Kerry Indev Logistic8",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "9",
      companyName: "Kerry Indev Logistic9",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "10",
      companyName: "Kerry Indev Logistic10",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "11",
      companyName: "Kerry Indev Logistic11",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
  ];

  const branches = [
    {
      key: "1",
      branchName: " branchName1",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "2",
      branchName: " branchName2",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "3",
      branchName: " branchName3",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "4",
      branchName: " branchName4",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "5",
      branchName: " branchName5",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "6",
      branchName: " branchName6",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "7",
      branchName: " branchName7",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "8",
      branchName: " branchName8",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "9",
      branchName: " branchName9",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "10",
      branchName: " branchName10",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "11",
      branchName: " branchName11",
      companyRegisterNo: "KIL2332333",
      companyAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
  ];

  const columns = [
    {
      title: <span style={{ color: "#94A3B8" }}>Company Name</span>,
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Branch Name</span>,
      dataIndex: "branchName",
      sorter: (a, b) => a.branchName.localeCompare(b.branchName),
    },

    {
      title: <span style={{ color: "#94A3B8" }}>User Name</span>,
      dataIndex: "userName",
      sorter: (a, b) => a.userName.localeCompare(b.userName),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>User ID</span>,
      dataIndex: "userID",
      sorter: (a, b) => a.userID.localeCompare(b.userID),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Mobile No</span>,
      dataIndex: "phoneNo",
      sorter: (a, b) => a.phoneNo.localeCompare(b.phoneNo),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Email ID</span>,
      dataIndex: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Role</span>,
      dataIndex: "Roles",
      sorter: (a, b) => a.Roles.localeCompare(b.Roles),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Action</span>,
      render: (_, record) => (
        <MoreOutlined
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(90deg)",
          }}
          onClick={() => handleRowClick(record)}
        />
      ),
    },
  ];
  const handleClick = () => {
    setMoved(!moved);
    setButtonText(moved ? "NEW USER" : "PORTAL USER");
  };

  const onShowSizeChange = (current, pageSize) => {
    setItemsPerPage(pageSize);
    setCurrentPage(current);
  };

  const handlePageSizeChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRowClick = (record) => {
    console.log("Row clicked:", record);
    setCurrentRecord(record);
    form.setFieldsValue(record);
  };

  const handleSubmit = (values) => {
    console.log("Form Submitted with values:", values);
    message.success("Form submitted successfully!");
    form.resetFields();
    setCurrentRecord(null);
  };

  const handleAddCompanyCategoryRow = () => {
    setCompanyCategorySelects([...companyCategorySelects, {}]);
  };

  const handleDeleteCompanyCategoryRow = (index) => {
    const newSelects = companyCategorySelects.filter((_, i) => i !== index);
    setCompanyCategorySelects(newSelects);
  };

  const handleAddUserMappingRow = () => {
    setUserMappingSelects([...userMappingSelects, {}]);
  };

  const handleDeleteUserMappingRow = (index) => {
    const newSelects = userMappingSelects.filter((_, i) => i !== index);
    setUserMappingSelects(newSelects);
  };

  useEffect(() => {
    if (currentRecord) {
      form.setFieldsValue(currentRecord);
    }
  }, [currentRecord, form]);

  return (
    <div className="container">
      <div className="switch-container">
        <Button onClick={handleClick} className="outerButton">
          <span className={moved ? "align-left" : "align-right"}>
            {moved ? "NEW USER" : "PORTAL USER"}
          </span>
          <Button
            type="default"
            className={`innerButton ${moved ? "move" : ""}`}
          >
            {moved ? "PORTAL USER" : "NEW USER"}{" "}
          </Button>
        </Button>
      </div>
      <div>
        <Form
          form={form}
          className="form-layout"
          onFinish={handleSubmit}
          initialValues={currentRecord || {}}
        >
          <div className="form-container1">
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
              User Details
            </p>
            <Divider />

            {/* First Row */}
            <div className="form-row">
              <div className="form-item">
                <p className="label">First Name</p>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Last Name</p>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">User ID</p>
                <Form.Item
                  name="userID"
                  rules={[
                    {
                      required: true,
                      message: "Please input your User ID!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Phone Number</p>
                <Form.Item
                  name="phoneNo"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
            </div>
            {/* Second Row */}
            <div
              className="form-row"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: 35,
              }}
            >
              <div className="form-item">
                <p className="label">Email Id</p>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">Upload Profile Photo</p>
                <Form.Item name="uploadProfilePhoto">
                  <Upload>
                    <Button
                      style={{
                        height: 40,
                        width: 250,
                      }}
                      className="upload-btn"
                    >
                      Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </div>
          {/* formContainer2 */}
          <div className="form-container2">
            <div className="title">
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
                User Company - Category Mapping
              </p>
              <Button
                color="primary"
                variant="outlined"
                className="add-btn1"
                onClick={handleAddCompanyCategoryRow}
              >
                ADD COMPANY
              </Button>
            </div>
            <Divider />

            {/* First Row (always visible) */}
            <div className="form-row">
              <div className="form-item">
                <p className="label">Company Name</p>
                <Form.Item
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 315,
                    }}
                  >
                    {companies.map((company, index) => (
                      <Select.Option key={index} value={company.companyName}>
                        {company.companyName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Category Name</p>
                <Form.Item
                  name="branch"
                  rules={[
                    {
                      required: true,
                      message: "Please input your category name!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 315,
                    }}
                  />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Organizational Name</p>
                <Form.Item
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your organizational name!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 315,
                    }}
                  />
                </Form.Item>
              </div>
              <div className="icon-button">
                <div>
                  <Button
                    className="icon"
                    onClick={() => handleDeleteCompanyCategoryRow(0)}
                  >
                    <img src={trash} alt="trash" />
                  </Button>
                </div>
                <div>
                  <Button className="icon">
                    <img src={lock} alt="lock" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Dynamic Rows of Select components */}
            {companyCategorySelects.map((_, index) => (
              <div key={index} className="form-row">
                <div className="form-item">
                  <Form.Item
                    name={`company-${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your company name!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{
                        height: 40,
                        width: 315,
                      }}
                    >
                      {companies.map((company, companyIndex) => (
                        <Select.Option
                          key={companyIndex}
                          value={company.companyName}
                        >
                          {company.companyName}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>

                <div className="form-item">
                  <Form.Item
                    name={`branch-${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your category name!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{
                        height: 40,
                        width: 315,
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="form-item">
                  <Form.Item
                    name={`companyNameOrg-${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please input your organizational name!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{
                        height: 40,
                        width: 315,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="icon-button">
                  <div>
                    <Button
                      className="icon"
                      onClick={() => handleDeleteCompanyCategoryRow(index)}
                    >
                      <img src={trash} alt="trash" />
                    </Button>
                  </div>
                  <div>
                    <Button className="icon">
                      <img src={lock} alt="lock" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="form-container3">
            <div className="title">
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
                User mapping & roles
              </p>
              <Button
                color="primary"
                variant="outlined"
                className="add-btn2"
                onClick={handleAddUserMappingRow}
              >
                ADD
              </Button>
            </div>
            <Divider />
            {/* Fourth Row */}
            <div className="form-row">
              <div className="form-item">
                <p className="label">Company</p>
                <Form.Item
                  name="company"
                  rules={[
                    {
                      required: true,
                      message: "Please select a company!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    {companies.map((company, index) => (
                      <Select.Option key={index} value={company.companyName}>
                        {company.companyName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Branch</p>
                <Form.Item
                  name="branch"
                  rules={[
                    {
                      required: true,
                      message: "Please select a branch!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    {branches.map((branch, index) => (
                      <Select.Option key={index} value={branch.branchName}>
                        {branch.branchName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Reporting Person</p>
                <Form.Item
                  name="reportingPerson"
                  rules={[
                    {
                      required: true,
                      message: "Please select Reporting person!",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    {/* {companies.map((company, index) => (
                      <Select.Option key={index} value={company.companyName}>
                        {company.companyName}
                      </Select.Option>
                    ))} */}
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Roles</p>
                <Form.Item
                  name="Roles"
                  rules={[{ required: true, message: "Please select Roles!" }]}
                >
                  <Select
                    placeholder="Select"
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    {/* {companies.map((company, index) => (
                      <Select.Option key={index} value={company.companyName}>
                        {company.companyName}
                      </Select.Option>
                    ))} */}
                  </Select>
                </Form.Item>
              </div>
              <div className="icon-button">
                <div>
                  <Button
                    className="icon"
                    onClick={() => handleDeleteCompanyCategoryRow(0)}
                  >
                    <img src={trash} alt="trash" />
                  </Button>
                </div>
                <div>
                  <Button className="icon">
                    <img src={lock} alt="lock" />
                  </Button>
                </div>
              </div>
            </div>
            {/* Dynamic Rows of Select components */}
            {userMappingSelects.map((_, index) => (
              <div key={index} className="form-row">
                <div className="form-item">
                  <Form.Item
                    name={`company-${index}`}
                    rules={[
                      { required: true, message: "Please select a company!" },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{ height: 40, width: 250 }}
                    >
                      {companies.map((company, companyIndex) => (
                        <Select.Option
                          key={companyIndex}
                          value={company.companyName}
                        >
                          {company.companyName}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>

                <div className="form-item">
                  <Form.Item
                    name={`branch-${index}`}
                    rules={[
                      { required: true, message: "Please select a branch!" },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{ height: 40, width: 250 }}
                    >
                      {branches.map((branch, branchIndex) => (
                        <Select.Option
                          key={branchIndex}
                          value={branch.branchName}
                        >
                          {branch.branchName}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>

                <div className="form-item">
                  <Form.Item
                    name={`reportingPerson-${index}`}
                    rules={[
                      {
                        required: true,
                        message: "Please select a reporting person!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{ height: 40, width: 250 }}
                    />
                  </Form.Item>
                </div>

                <div className="form-item">
                  <Form.Item
                    name={`roles-${index}`}
                    rules={[
                      { required: true, message: "Please select a role!" },
                    ]}
                  >
                    <Select
                      placeholder="Select"
                      style={{ height: 40, width: 250 }}
                    />
                  </Form.Item>
                </div>

                <div className="icon-button">
                  <div>
                    <Button
                      className="icon"
                      onClick={() => handleDeleteUserMappingRow(index)}
                    >
                      <img src={trash} alt="trash" />
                    </Button>
                  </div>
                  <div>
                    <Button className="icon">
                      <img src={lock} alt="lock" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="btn-container">
            <div className="btn-item">
              <Button type="button" className="cancel-button">
                CANCEL
              </Button>
              <Button type="primary" htmlType="submit">
                SUBMIT
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div className="table-container">
        <div
          className="top-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "125%",
                letterSpacing: "0.2px",
                textTransform: "uppercase",
                marginLeft: 14,
                marginTop: 14,
              }}
            >
              Companies List
            </p>
          </div>
          <div>
            <Input
              placeholder="Search..."
              prefix={<SearchOutlined />}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                height: 44,
                width: 250,
              }}
            ></Input>
          </div>
        </div>
        <div className="table">
          <Table
            rowSelection={{
              type: "checkbox",
            }}
            rowKey="key"
            columns={columns}
            dataSource={currentData}
            pagination={false}
            className="table-with-column-divider"
          />
        </div>
        <div className="pagination-container">
          <div>
            <Form>
              <Form.Item
                label="Show Rows"
                style={{ marginLeft: 8, fontWeight: "bold" }}
              >
                <Select
                  value={itemsPerPage}
                  onChange={handlePageSizeChange}
                  style={{ width: 120 }}
                  placeholder="5 items"
                >
                  <Option value={5}>5 items</Option>
                  <Option value={10}>10 items</Option>
                  <Option value={50}>50 items</Option>
                  <Option value={100}>100 items</Option>
                </Select>
              </Form.Item>
            </Form>
          </div>
          <div>
            <Pagination
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={1}
              total={data.length}
              pageSize={itemsPerPage}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
