import React, { FC } from "react";
import Style from "./style.module.css";
import Link from "next/link";

interface ButtonProps {
  title: string;
  link?: boolean;
  href?: string;
  background?: boolean;
  type?: "submit" | "button";
}

const Button: FC<ButtonProps> = ({
  title = "Gönder",
  link = false,
  href,
  background = false,
  type = "button",
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
        <button className={Style.button} type={type}>
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
