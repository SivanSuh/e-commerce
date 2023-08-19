import React from "react";
import Input from "../Atoms/Input";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const { formData } = useSelector((state: RootState) => state.auth);
  console.log("form data", formData);
  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <h1>E-Commerce</h1>
        {/* <Input /> */}
        {formData ? (
          <div className={Style.login}>
            <h2 className="mx-2">{formData?.userName}</h2>
            <Button title="Çıkış Yap" link href="/auth/login" />
          </div>
        ) : (
          <div className={Style.login}>
            <Button title="Kayıt Ol" link href="/auth/login" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
