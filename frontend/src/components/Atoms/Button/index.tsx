import React, { FC } from "react";
import Style from "./style.module.css";
import Link from "next/link";

interface ButtonProps {
  title: string;
  link?: boolean;
  href?: string;
  background?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  title = "Gönder",
  link = false,
  href,
  background = false,
  type = "button",
  onClick,
}) => {
  return (
    <>
      {link ? (
        <Link
          href={href as string}
          className={background ? Style.bgNone : Style.button}
        >
          {title}
        </Link>
      ) : (
        <button className={Style.button} type={type} onClick={onClick}>
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
