import React, { FC } from "react";
import Style from "./style.module.css";
import Link from "next/link";
import ButtonProps from "./props";

const Button: FC<ButtonProps> = ({
  title = "Gönder",
  link = false,
  href,
  background = false,
  type = "button",
  onClick,
  bgColor = "black",
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
        <button
          style={{ backgroundColor: bgColor }}
          className={Style.button}
          type={type}
          onClick={onClick}
        >
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
