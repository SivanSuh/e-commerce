import React from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Footer from "../Footer";
import Style from "./style.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={Style.layout}>
      <Navbar />
      <main className={Style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
