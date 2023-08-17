import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import React from "react";
import Style from "./style.module.css";
import { FieldValues, useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form className={Style.form}>
      <h2 className={Style.title}>Register Page</h2>
      <Input id="email" name="email" register={register} placeholder="Email" />
      <Input
        placeholder="User Name"
        id="userName"
        name="userName"
        register={register}
      />
      <Input
        id="password"
        name="password"
        register={register}
        placeholder="Password"
        type="password"
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        register={register}
      />
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
