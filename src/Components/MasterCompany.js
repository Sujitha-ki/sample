import React from "react";
import "../styles/Masters.css";
import { Form, Input, Button, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
export default function MasterCompany() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;
  const countries = ["India", "USA", "Australia"];
  const states = ["State 1", "State 2", "State 3"];
  const cities = ["City 1", "City 2", "City 3"];
  return (
    <div className="container">
      <div classNme="form-container">
        <Form name="companyForm" className="form-layout">
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
                <Input />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item
                name="companyAlias"
                rules={[
                  {
                    required: true,
                    message: "Please input your company alias!",
                  },
                ]}
              >
                <p className="label">Company Alias Name</p>
                <Input />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item
                name="registerNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your company register number!",
                  },
                ]}
              >
                <p className="label">Company Register Number</p>
                <Input />
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
                <Input />
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
                <Input />
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
                <Input />
              </Form.Item>
            </div>
            <div className="form-item">
              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <p className="label">Phone Number</p>
                <Input />
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
                <Input />
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
                <Input />
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
                <Input />
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
                <Input />
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
                <Select placeholder="Select a city">
                  {cities.map((city, index) => (
                    <Option key={index} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
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
                <Select placeholder="Select a state">
                  {states.map((state, index) => (
                    <Option key={index} value={state}>
                      {state}
                    </Option>
                  ))}
                </Select>
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
                <Select placeholder="Select a country">
                  {countries.map((country, index) => (
                    <Option key={index} value={country}>
                      {country}
                    </Option>
                  ))}
                </Select>
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
                <Input />
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
                <Input />
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
                <Input />
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
                <Input />
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
        </Form>
      </div>
      <div className="btn-container">
        <button type="button" className="cancel-button">
          CANCEL
        </button>
        <Button type="primary" htmlType="submit">
          SUBMIT
        </Button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
            {/* Add more table rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
