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
} from "antd";
import { MoreOutlined, SearchOutlined } from "@ant-design/icons";
import "../styles/Masters.css";

export default function MasterUser() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [currentRecord, setCurrentRecord] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([
    {
      key: "1",
      branchName: "Indev Logistic",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "2",
      branchName: "Kerry Indev Logistic2",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "3",
      branchName: "Kerry Indev Logistic3",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "4",
      branchName: "Kerry Indev Logistic4",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "5",
      branchName: "Kerry Indev Logistic5",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "6",
      branchName: "Kerry Indev Logistic6",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "7",
      branchName: "Kerry Indev Logistic7",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "8",
      branchName: "Kerry Indev Logistic8",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "9",
      branchName: "Kerry Indev Logistic9",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "10",
      branchName: "Kerry Indev Logistic10",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
    },
    {
      key: "11",
      branchName: "Kerry Indev Logistic11",
      branchRegisterNo: "KIL2332333",
      branchAliasName: "KIL",
      phoneNo: "+91 88888 88888",
      city: "Coimbatore",
      gstNumber: "GST27AAAPA1234A1Z5",
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

  const columns = [
    {
      title: <span style={{ color: "#94A3B8" }}>Branch Name</span>,
      dataIndex: "branchName",
      sorter: (a, b) => a.branchName.localeCompare(b.branchName),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Branch Register No</span>,
      dataIndex: "branchRegisterNo",
      sorter: (a, b) => a.branchRegisterNo.localeCompare(b.branchRegisterNo),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Branch Alias Name</span>,
      dataIndex: "branchAliasName",
      sorter: (a, b) => a.branchAliasName.localeCompare(b.branchAliasName),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Phone No</span>,
      dataIndex: "phoneNo",
      sorter: (a, b) => a.phoneNo.localeCompare(b.phoneNo),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>City</span>,
      dataIndex: "city",
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>GST Number</span>,
      dataIndex: "gstNumber",
      sorter: (a, b) => a.gstNumber.localeCompare(b.gstNumber),
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

  useEffect(() => {
    if (currentRecord) {
      form.setFieldsValue(currentRecord);
    }
  }, [currentRecord, form]);

  return (
    <div className="container">
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
            <div className="form-row">
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
          <div className="form-container2">
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
              User company - category mapping
            </p>
            <Divider />
            {/* Third Row */}
            <div className="form-row">
              <div className="form-item">
                <p className="label">Company Name</p>
                <Form.Item
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">category Name</p>
                <Form.Item
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Organizational Name</p>
                <Form.Item
                  name="companyName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company name!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="form-container3">
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
                    {companies.map((company, index) => (
                      <Select.Option key={index} value={company.companyName}>
                        {company.companyName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Reporting Person</p>
                <Form.Item
                  name="pincode"
                  rules={[
                    { required: true, message: "Please input your pincode!" },
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
                <p className="label">Roles</p>
                <Form.Item
                  name="contactPerson"
                  rules={[
                    { required: true, message: "Please input contact person!" },
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
            </div>
            {/* Fifth Row */}
            <div
              className="form-row"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 30,
              }}
            >
              <div className="form-item">
                <Form.Item
                  name="contactPerson"
                  rules={[
                    { required: true, message: "Please input contact person!" },
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
                <Form.Item
                  name="contactPerson"
                  rules={[
                    { required: true, message: "Please input contact person!" },
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
                <Form.Item
                  name="contactPerson"
                  rules={[
                    { required: true, message: "Please input contact person!" },
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
                <Form.Item
                  name="contactPerson"
                  rules={[
                    { required: true, message: "Please input contact person!" },
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
            </div>
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
