import React from "react";

//molecules
import Navbar from "../molecules/Navbar";

const Layout = ({ children }) => (
  <div className="main-page">
    <Navbar />
    {children}
  </div>
);

export default Layout;
