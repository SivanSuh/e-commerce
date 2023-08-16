import React, { FC } from "react";
import Style from "./style.module.css";

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title = "Gönder" }) => {
  return <button className={Style.button}>{title}</button>;
};

export default Button;
