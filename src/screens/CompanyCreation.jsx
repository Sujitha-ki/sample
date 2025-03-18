import React, { useState, useEffect } from "react";
import { Flex, Layout, Menu, Button, message, Upload } from "antd";
import axios from "axios";
import "../styles/CompanyCreation.css";
import ContractActive from "../assets/image/ContractActive.svg";
import MastersActive from "../assets/image/MastersActive.svg";
import OverviewActive from "../assets/image/OverviewActive.svg";
import SettingActive from "../assets/image/SettingActive.svg";
import logout from "../assets/image/logout.svg";
import logo from "../assets/image/logo.svg";
import { UploadOutlined } from "@ant-design/icons";

export default function CompanyCreation() {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [countryCodes, setCountryCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem("Overview", "1", <img src={OverviewActive} alt="Overview" />),
    getItem("Masters", "2", <img src={MastersActive} alt="Masters" />),
    getItem("Contract", "3", <img src={ContractActive} alt="Contract" />),
    getItem("Settings", "4", <img src={SettingActive} alt="settings" />),
    getItem("logout", "5", <img src={logout} alt="logout" />),
  ];
  const [formData, setFormData] = useState({
    csname: "",
    ccode: "",
    bname: "",
    bsname: "",
    bcode: "",
    phno: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cphno: "",
    cemail: "",
    caddress: "",
    phnoCountryCode: "+91",
    cphnoCountryCode: "+91",
  });

  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = ({ file }) => {
    setFormData({
      ...formData,
      file: file,
    });
  };
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get(
          "http://192.168.21.131:9000/core/countrycodeget/"
        );
        console.log(response.data);

        const codes = response.data.map((country) => ({
          name: country.name,
          flag: country.flag,
          code: country.code,
          dial_code: country.dial_code,
        }));

        setCountryCodes(codes);
      } catch (err) {
        setError("Error fetching country codes");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryCodes();
  }, []);

  const validate = () => {
    let validationErrors = {};
    const labelMapping = {
      cname: "Company Name",
      csname: "Company Short Name",
      ccode: "Company Code",
      bname: "Branch Name",
      bsname: "Branch Short Name",
      bcode: "Branch Code",
      phno: "Phone Number",
      email: "Email",
      address: "Address",
      city: "City",
      state: "State",
      pincode: "Pincode",
      cphno: "Contact Phone Number",
      cemail: "Contact Email",
      caddress: "Contact Address",
    };

    const requiredFields = [
      "cname",
      "csname",
      "ccode",
      "bname",
      "bsname",
      "bcode",
      "phno",
      "email",
      "address",
      "city",
      "state",
      "pincode",
      "cphno",
      "cemail",
      "caddress",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        validationErrors[field] = `${labelMapping[field]} is required`;
      }
    });

    if (formData.phno) {
      if (!/^\d+$/.test(formData.phno)) {
        validationErrors.phno = "Phone number must contain only numbers.";
      } else if (formData.phno.length !== 10) {
        validationErrors.phno = "Phone number must be exactly 10 digits.";
      }
    }

    if (formData.cphno) {
      if (!/^\d+$/.test(formData.cphno)) {
        validationErrors.cphno =
          "Contact phone number must contain only numbers.";
      } else if (formData.cphno.length !== 10) {
        validationErrors.cphno =
          "Contact phone number must be exactly 10 digits.";
      }
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (formData.cemail && !/\S+@\S+\.\S+/.test(formData.cemail)) {
      validationErrors.cemail = "Contact email is invalid";
    }

    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
      validationErrors.pincode = "Pincode must be 6 digits";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = validate();

    if (validationResult) {
      console.log(formData);
    }
  };

  return (
    <>
      <Flex>
        <Layout className="layout">
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
          <Layout>
            <Header className="header">
              <h2>Company Creation</h2>
            </Header>
            <Content className="content">
              <div className="main-container">
                <form onSubmit={handleSubmit}>
                  <div className="container">
                    <div className="form-group">
                      <label htmlFor="cname">Company Name:</label>
                      <input
                        type="text"
                        id="cname"
                        name="cname"
                        value={formData.cname}
                        onChange={handleChange}
                      />
                      {errors.cname && <p className="error">{errors.cname}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="csname">Company Short Name:</label>
                      <input
                        type="text"
                        id="csname"
                        name="csname"
                        value={formData.csname}
                        onChange={handleChange}
                      />
                      {errors.csname && (
                        <p className="error">{errors.csname}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="ccode">Company Code:</label>
                      <input
                        type="text"
                        id="ccode"
                        name="ccode"
                        value={formData.ccode}
                        onChange={handleChange}
                      />
                      {errors.ccode && <p className="error">{errors.ccode}</p>}
                    </div>
                  </div>

                  <div className="container">
                    <div className="form-group">
                      <label htmlFor="bname">Branch Name:</label>
                      <input
                        type="text"
                        id="bname"
                        name="bname"
                        value={formData.bname}
                        onChange={handleChange}
                      />
                      {errors.bname && <p className="error">{errors.bname}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="bsname">Branch Short Name:</label>
                      <input
                        type="text"
                        id="bsname"
                        name="bsname"
                        value={formData.bsname}
                        onChange={handleChange}
                      />
                      {errors.bsname && (
                        <p className="error">{errors.bsname}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="bcode">Branch Code:</label>
                      <input
                        type="text"
                        id="bcode"
                        name="bcode"
                        value={formData.bcode}
                        onChange={handleChange}
                      />
                      {errors.bcode && <p className="error">{errors.bcode}</p>}
                    </div>
                  </div>

                  <div className="container">
                    <div className="form-group">
                      <label htmlFor="phno">Phone No:</label>
                      <div className="phone-input">
                        <select
                          name="phnoCountryCode"
                          value={formData.phnoCountryCode}
                          onChange={handleChange}
                        >
                          {loading ? (
                            <option>Loading country codes...</option>
                          ) : countryCodes.length > 0 ? (
                            countryCodes.map((country, index) => (
                              <option key={index} value={country.dial_code}>
                                {country.flag}
                                {country.dial_code} {country.name} ( )
                              </option>
                            ))
                          ) : (
                            <option>No country codes available</option>
                          )}
                        </select>

                        <input
                          type="tel"
                          id="phno"
                          name="phno"
                          value={formData.phno}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.phno && <p className="error">{errors.phno}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Address:</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && (
                        <p className="error">{errors.address}</p>
                      )}
                    </div>
                  </div>

                  <div className="container">
                    <div className="form-group">
                      <label htmlFor="city">City:</label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      >
                        <option value="">Select a City</option>
                        <option value="city1">City 1</option>
                        <option value="city2">City 2</option>
                        <option value="city3">City 3</option>
                      </select>
                      {errors.city && <p className="error">{errors.city}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="state">State:</label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option value="">Select a State</option>
                        <option value="state1">Assam</option>
                        <option value="state2">Arunachal Pradesh</option>
                        <option value="state3">TamilNadu</option>
                      </select>
                      {errors.state && <p className="error">{errors.state}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode:</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                      />
                      {errors.pincode && (
                        <p className="error">{errors.pincode}</p>
                      )}
                    </div>
                  </div>

                  <div className="container">
                    <div className="form-group">
                      <label htmlFor="cphno">Contact Phone No:</label>
                      <div className="phone-input">
                        <select
                          name="cphnoCountryCode"
                          value={formData.cphnoCountryCode}
                          onChange={handleChange}
                        >
                          {loading ? (
                            <option>Loading country codes...</option>
                          ) : countryCodes.length > 0 ? (
                            countryCodes.map((country, index) => (
                              <option key={index} value={country.dial_code}>
                                {country.flag}
                                {country.dial_code} {country.name} ( )
                              </option>
                            ))
                          ) : (
                            <option>No country codes available</option>
                          )}
                        </select>

                        <input
                          type="tel"
                          id="cphno"
                          name="cphno"
                          value={formData.cphno}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.cphno && <p className="error">{errors.cphno}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="cemail">Contact Email:</label>
                      <input
                        type="email"
                        id="cemail"
                        name="cemail"
                        value={formData.cemail}
                        onChange={handleChange}
                      />
                      {errors.cemail && (
                        <p className="error">{errors.cemail}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="caddress">Contact Address:</label>
                      <input
                        type="text"
                        id="caddress"
                        name="caddress"
                        value={formData.caddress}
                        onChange={handleChange}
                      />
                      {errors.caddress && (
                        <p className="error">{errors.caddress}</p>
                      )}
                    </div>
                  </div>
                  <div className="container">
                    <div className="form-group">
                      <label>File Upload:</label>
                      <div className="upload-button">
                        <Upload {...props} onChange={handleFileChange}>
                          <Button className="Button" icon={<UploadOutlined />}>
                            Click to Upload
                          </Button>
                        </Upload>
                      </div>
                    </div>
                  </div>
                  <div className="btn-container">
                    <button type="submit" className="btn">
                      SUBMIT
                    </button>
                  </div>
                  <br />
                </form>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
}
