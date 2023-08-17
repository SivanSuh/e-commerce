import React, { FC } from "react";
import Style from "./style.module.css";

interface InputProps {
  type?: "text" | "password";
  placeholder?: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder = "Ne Aramıştınız...",
}) => {
  return (
    <input type={type} placeholder={placeholder} className={Style.input} />
  );
};

export default React.memo(Input);
