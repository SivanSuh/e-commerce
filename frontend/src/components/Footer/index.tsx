import Image from "next/image";
import Style from "./style.module.css";
import { FooterLinks } from "@/mock";
import React from "react";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Image src="/logo.jpeg" alt="logo" width={50} height={50} />
      <div className="gap-5 inline-flex">
        {FooterLinks.map((item) => {
          console.log("items", item);
          return (
            <React.Fragment key={item.title}>
              <span>{item.title}</span>
            </React.Fragment>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
