// import React, { useState } from "react";
// import { Space, Table } from "antd";
// import sort from "../assets/image/sort.svg";
// import { Pagination } from "antd";
// import { MoreOutlined } from "@ant-design/icons";

// export default function TableComponent({ onRowClick }) {
//   const handleChange = (e) => {
//     setSelectedValue(e.target.value);
//   };
//   const [data, setData] = useState([
//     {
//       key: "1",
//       companyName: "Indev Logistic",
//       companyRegisterNo: "KIL2332333",
//       companyAliasName: "KIL",
//       phoneNo: "+91 88888 88888",
//       city: "Coimbatore",
//       gstNumber: "GST27AAAPA1234A1Z5",
//     },
//     {
//       key: "2",
//       companyName: "Kerry Indev Logistic",
//       companyRegisterNo: "KIL2332333",
//       companyAliasName: "KIL",
//       phoneNo: "+91 88888 88888",
//       city: "Coimbatore",
//       gstNumber: "GST27AAAPA1234A1Z5",
//     },
//     {
//       key: "3",
//       companyName: "Kerry Indev Logistic",
//       companyRegisterNo: "KIL2332333",
//       companyAliasName: "KIL",
//       phoneNo: "+91 88888 88888",
//       city: "Coimbatore",
//       gstNumber: "GST27AAAPA1234A1Z5",
//     },
//     {
//       key: "4",
//       companyName: "Kerry Indev Logistic",
//       companyRegisterNo: "KIL2332333",
//       companyAliasName: "KIL",
//       phoneNo: "+91 88888 88888",
//       city: "Coimbatore",
//       gstNumber: "GST27AAAPA1234A1Z5",
//     },
//   ]);
//   const [sortOrder, setSortOrder] = useState({
//     companyName: "ascend",
//     companyRegisterNo: "ascend",
//     companyAliasName: "ascend",
//     phoneNo: "ascend",
//     city: "ascend",
//     gstNumber: "ascend",
//   });
//   const handleSort = (column) => {
//     const newData = [...data];
//     const currentOrder = sortOrder[column];

//     const sortedData = newData.sort((a, b) => {
//       if (currentOrder === "ascend") {
//         return a[column] > b[column] ? 1 : -1;
//       } else {
//         return a[column] < b[column] ? 1 : -1;
//       }
//     });
//     setData(sortedData);
//     setSortOrder((prev) => ({
//       ...prev,
//       [column]: currentOrder === "ascend" ? "descend" : "ascend",
//     }));
//   };

//   const columns = [
//     {
//       title: (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ color: "#94A3B8" }}>Company Name</span>
//           <button
//             onClick={() => handleSort("companyName")}
//             style={{
//               background: "transparent",
//               border: "none",
//               fontSize: "16px",
//               color: "#94A3B8",
//             }}
//           >
//             <img
//               src={sort}
//               alt="sort"
//               style={{
//                 marginLeft: "5px",
//                 width: "7.140000343322754",
//                 height: "14",
//               }}
//             />
//           </button>
//         </div>
//       ),
//       dataIndex: "companyName",
//       key: "companyName",
//       render: (text) => (
//         <span
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "500px",
//             fontSize: "14px",
//             lineHeight: "150%",
//             letterSpacing: "0.2px",
//           }}
//         >
//           {text}
//         </span>
//       ),
//     },

//     {
//       title: (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ color: "#94A3B8" }}>Company Register No</span>
//           <button
//             onClick={() => handleSort("companyRegisterNo")}
//             style={{
//               background: "transparent",
//               border: "none",
//               fontSize: "16px",
//               color: "#94A3B8",
//             }}
//           >
//             <img
//               src={sort}
//               alt="sort"
//               style={{
//                 marginLeft: "5px",
//                 width: "7.140000343322754",
//                 height: "14",
//               }}
//             />
//           </button>
//         </div>
//       ),
//       dataIndex: "companyRegisterNo",
//       key: "companyRegisterNo",
//       render: (text) => (
//         <span
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "500px",
//             fontSize: "14px",
//             lineHeight: "150%",
//             letterSpacing: "0.2px",
//           }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ color: "#94A3B8" }}>Company Alias Name</span>
//           <button
//             onClick={() => handleSort("companyAliasName")}
//             style={{
//               background: "transparent",
//               border: "none",

//               fontSize: "16px",
//               color: "#94A3B8",
//             }}
//           >
//             <img
//               src={sort}
//               alt="sort"
//               style={{
//                 marginLeft: "5px",
//                 width: "7.140000343322754",
//                 height: "14",
//               }}
//             />
//           </button>
//         </div>
//       ),
//       dataIndex: "companyAliasName",
//       key: "companyAliasName",
//       render: (text) => (
//         <span
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "500px",
//             fontSize: "14px",
//             lineHeight: "150%",
//             letterSpacing: "0.2px",
//           }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ color: "#94A3B8" }}>Phone No</span>
//           <button
//             onClick={() => handleSort("phoneNo")}
//             style={{
//               background: "transparent",
//               border: "none",
//               fontSize: "16px",
//               color: "#94A3B8",
//             }}
//           >
//             <img
//               src={sort}
//               alt="sort"
//               style={{
//                 marginLeft: "5px",
//                 width: "7.140000343322754",
//                 height: "14",
//               }}
//             />
//           </button>
//         </div>
//       ),
//       dataIndex: "phoneNo",
//       key: "phoneNo",
//       render: (text) => (
//         <span
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "500px",
//             fontSize: "14px",
//             lineHeight: "150%",
//             letterSpacing: "0.2px",
//           }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ color: "#94A3B8" }}>City</span>
//           <button
//             onClick={() => handleSort("city")}
//             style={{
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//               fontSize: "16px",
//               color: "#94A3B8",
//             }}
//           >
//             <img
//               src={sort}
//               alt="sort"
//               style={{
//                 marginLeft: "5px",
//                 width: "7.140000343322754",
//                 height: "14",
//               }}
//             />
//           </button>
//         </div>
//       ),
//       dataIndex: "city",
//       key: "city",
//       render: (text) => (
//         <span
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "500px",
//             fontSize: "14px",
//             lineHeight: "150%",
//             letterSpacing: "0.2px",
//           }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: (
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <span style={{ color: "#94A3B8" }}>GST Number</span>
//           <button
//             onClick={() => handleSort("gstNumber")}
//             style={{
//               background: "transparent",
//               border: "none",
//               cursor: "pointer",
//               fontSize: "16px",
//               color: "#94A3B8",
//             }}
//           >
//             <img
//               src={sort}
//               alt="sort"
//               style={{
//                 marginLeft: "5px",
//                 width: "7.140000343322754",
//                 height: "14",
//               }}
//             />
//           </button>
//         </div>
//       ),
//       dataIndex: "gstNumber",
//       key: "gstNumber",
//       render: (text) => (
//         <span
//           style={{
//             fontFamily: "Inter",
//             fontWeight: "500px",
//             fontSize: "14px",
//             lineHeight: "150%",
//             letterSpacing: "0.2px",
//           }}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text, record) => (
//         <MoreOutlined
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onClick={() => onRowClick(record)}
//         />
//       ),
//     },
//   ];

//   const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(
//         `selectedRowKeys: ${selectedRowKeys}`,
//         "selectedRows: ",
//         selectedRows
//       );
//     },
//     getCheckboxProps: (record) => ({
//       disabled: record.name === "Disabled User",
//       name: record.name,
//     }),
//   };
//   return (
//     <div className="table-container">
//       <p
//         style={{
//           fontFamily: "Inter",
//           fontWeight: "600",
//           fontSize: "16px",
//           lineHeight: "125%",
//           letterSpacing: "0.2px",
//           textTransform: "uppercase",
//         }}
//       >
//         Companies List
//       </p>
//       <div className="table">
//         <Table
//           rowSelection={{
//             type: selectionType,
//             ...rowSelection,
//           }}
//           columns={columns}
//           dataSource={data}
//           pagination={false}
//           className="table-with-column-divider"
//         />
//       </div>
//       <div className="pagination-container">
//         <Pagination
//           showSizeChanger={false}
//           onShowSizeChange={onShowSizeChange}
//           defaultCurrent={3}
//           total={500}
//         />
//       </div>
//     </div>
//   );
// }
