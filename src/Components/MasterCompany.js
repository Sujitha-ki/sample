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

export default function MasterCompany() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [currentRecord, setCurrentRecord] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

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
  ]);

  const columns = [
    {
      title: <span style={{ color: "#94A3B8" }}>Company Name</span>,
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Company Register No</span>,
      dataIndex: "companyRegisterNo",
      sorter: (a, b) => a.companyRegisterNo.localeCompare(b.companyRegisterNo),
    },
    {
      title: <span style={{ color: "#94A3B8" }}>Company Alias Name</span>,
      dataIndex: "companyAliasName",
      sorter: (a, b) => a.companyAliasName.localeCompare(b.companyAliasName),
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
              Company Details
            </p>
            <Divider />

            {/* First Row */}
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
                <p className="label">Company Alias Name</p>
                <Form.Item
                  name="companyAliasName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company alias!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">Company Register Number</p>
                <Form.Item
                  name="companyRegisterNo"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company register number!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">Company Code</p>
                <Form.Item
                  name="companyCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your company code!",
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
                <p className="label">GST Number</p>
                <Form.Item
                  name="gstNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your GST number!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">PAN Number</p>
                <Form.Item
                  name="panNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input your PAN number!",
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
            </div>
            {/* Third Row */}
            <div className="form-row">
              <div className="form-item">
                <p className="label">Address Line 1</p>
                <Form.Item
                  name="addressLine1"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address line 1!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Address Line 2</p>
                <Form.Item
                  name="addressLine2"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address line 2!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Address Line 3</p>
                <Form.Item
                  name="addressLine3"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address line 3!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">City</p>
                <Form.Item
                  name="city"
                  rules={[
                    { required: true, message: "Please select your city!" },
                  ]}
                >
                  <Select
                    id="city"
                    className="select"
                    defaultValue={currentRecord ? currentRecord.city : ""}
                    onChange={(value) => form.setFieldsValue({ city: value })}
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    <Option value="delhi">Delhi</Option>
                    <Option value="mumbai">Mumbai</Option>
                    <Option value="bangalore">Bangalore</Option>
                    <Option value="chennai">Chennai</Option>
                    <Option value="kolkata">Kolkata</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            {/* Fourth Row */}
            <div className="form-row">
              <div className="form-item">
                <p className="label">State</p>
                <Form.Item
                  name="state"
                  rules={[
                    { required: true, message: "Please select your state!" },
                  ]}
                >
                  <Select
                    id="state"
                    className="select"
                    defaultValue={currentRecord ? currentRecord.state : ""}
                    onChange={(value) => form.setFieldsValue({ state: value })}
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    <Option value="delhi">Delhi</Option>
                    <Option value="maharashtra">Maharashtra</Option>
                    <Option value="karnataka">Karnataka</Option>
                    <Option value="tamilnadu">Tamil Nadu</Option>
                    <Option value="westBengal">West Bengal</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Country</p>
                <Form.Item
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select
                    id="country"
                    // className="select"
                    defaultValue={currentRecord ? currentRecord.country : ""}
                    onChange={(value) =>
                      form.setFieldsValue({ country: value })
                    }
                    style={{
                      height: 40,
                      width: 250,
                    }}
                  >
                    <Option value="india">India</Option>
                    <Option value="usa">United States</Option>
                    <Option value="canada">Canada</Option>
                    <Option value="uk">United Kingdom</Option>
                    <Option value="australia">Australia</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Pincode</p>
                <Form.Item
                  name="pincode"
                  rules={[
                    { required: true, message: "Please input your pincode!" },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>

              <div className="form-item">
                <p className="label">Contact Person"</p>
                <Form.Item
                  name="contactPerson"
                  rules={[
                    { required: true, message: "Please input contact person!" },
                  ]}
                >
                  <Input className="input-field" />
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
                <p className="label">Contact Person Phone</p>
                <Form.Item
                  name="contactPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please input contact person phone!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">Contact Person Email</p>
                <Form.Item
                  name="contactEmail"
                  rules={[
                    {
                      required: true,
                      message: "Please input contact person email!",
                    },
                  ]}
                >
                  <Input className="input-field" />
                </Form.Item>
              </div>
              <div className="form-item">
                <p className="label">Upload Documents</p>
                <Form.Item name="uploadDocuments">
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
            onRow={(record) => ({
              onClick: () => handleRowClick(record), // Row click handler
            })}
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
