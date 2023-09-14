import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import React from "react";
import Style from "./style.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch, RootState } from "@/store/store";
import { registerRequest } from "@/store/slices/authSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      userName: "",
      confirmPassword: "",
      company: "",
    },
  });

  const dispatch = AppDispatch();
  const router = useRouter();
  const { formData, error } = useSelector((state: RootState) => state.auth);

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log("data", data);
    await dispatch(registerRequest(data))
      .unwrap()
      .then(() => {
        router.push("/");
      });
  };
  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={Style.title}>Register Page</h2>
      <Input
        id="email"
        name="email"
        errors={errors}
        register={register}
        placeholder="Email"
      />
      <Input
        placeholder="User Name"
        id="userName"
        name="userName"
        register={register}
        errors={errors}
      />
      <Input
        placeholder="Company"
        id="company"
        name="company"
        register={register}
        errors={errors}
      />
      <Input
        id="password"
        name="password"
        register={register}
        placeholder="Password"
        type="password"
        errors={errors}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        register={register}
        errors={errors}
      />
      <Button title="Register" type="submit" />
      <div className={Style.buttonWrapper}>
        <Button background title="Home Page" href="/" link />
        <Button
          background
          title="Do you have an account ?"
          href="/auth/login"
          link
        />
      </div>
      {error && <h2 className="text-center text-red-700">{error}</h2>}
    </form>
  );
};

export default Register;
