import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyCreation from "./screens/CompanyCreation";
import Masters from "./screens/Masters";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyCreation />} />
        <Route path="/masters" element={<Masters />} />
      </Routes>
    </Router>
  );
};

export default App;
