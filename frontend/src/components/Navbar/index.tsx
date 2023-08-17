import React from "react";
import Input from "../Atoms/Input";
import Style from "./style.module.css";
import Button from "../Atoms/Button";

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <h1>E-Commerce</h1>
        <Input />
        <Button title="Kayıt Ol" link href="/auth/login" />
      </div>
    </nav>
  );
};

export default Navbar;
