import React, { FC } from "react";
import Style from "./style.module.css";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

interface InputProps {
  type?: "text" | "password";
  placeholder?: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors | undefined;
  name?: string;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder = "Ne Aramıştınız...",
  id,
  register,
  errors,
  required,
  name,
}) => {
  return (
    <input
      type={type}
      id={id}
      {...register(id, { required })}
      placeholder={placeholder}
      className={`${errors?.[id] ? Style.required : Style.input}`}
      name={name}
    />
  );
};

export default React.memo(Input);
