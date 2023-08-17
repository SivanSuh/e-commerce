import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import React from "react";
import Style from "./style.module.css";

const Register = () => {
  return (
    <form className={Style.form}>
      <h2 className={Style.title}>Register Page</h2>
      <Input placeholder="Email" />
      <Input placeholder="User Name" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Confirm Password" type="password" />
      <Button title="Register" />
      <div className={Style.buttonWrapper}>
        <Button background title="Home Page" href="/" link />
        <Button
          background
          title="Do you have an account ?"
          href="/auth/login"
          link
        />
      </div>
    </form>
  );
};

export default Register;
