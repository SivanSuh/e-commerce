import Button from "@/components/Atoms/Button";
import Input from "@/components/Atoms/Input";
import React from "react";
import Style from "./style.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { login } from "@/store/slices/authSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { formData, error } = useSelector((state: RootState) => state.auth);
  const dispatch = AppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    await dispatch(login(data))
      .unwrap()
      .then(() => {
        router.push("/");
      });
  };

  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={Style.title}>Login Page</h2>
      <Input
        id="email"
        name="email"
        register={register}
        placeholder="Email"
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
      {error && <h2 className="text-center text-red-700">{error}</h2>}
    </form>
  );
};

export default Login;
