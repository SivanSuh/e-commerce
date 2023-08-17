import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import React, { useEffect, useLayoutEffect } from "react";
import Style from "./style.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import LoginModel from "@/modelsType/LoginModel";
import { login } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
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
  const { formData } = useSelector((state: RootState) => state.auth);
  const dispatch = AppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (formData !== null) {
      router.push("/");
    }
  }, [formData]);

  console.log("formdata", formData);
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log("data", data);
    await dispatch(login(data));
  };

  console.log("errr", errors);
  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={Style.title}>Login Page</h2>
      <Input
        id="email"
        name="email"
        register={register}
        placeholder="Email"
        errors={errors}
        required
      />
      <Input
        id="password"
        name="password"
        register={register}
        placeholder="Password"
        type="password"
        errors={errors}
        required
      />
      <Button title="Login" type="submit" />
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
