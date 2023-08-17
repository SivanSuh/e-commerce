import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import React from "react";
import Style from "./style.module.css";

const Login = () => {
  return (
    <form className={Style.form}>
      <h2 className={Style.title}>Login Page</h2>
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Button title="Login" />
      <div className={Style.buttonWrapper}>
        <Button background title="Home Page" href="/" link />
        <Button
          background
          title="Don't have an account ?"
          href="/auth/register"
          link
        />
      </div>
    </form>
  );
};

export default Login;
