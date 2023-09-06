import Image from "next/image";
import Style from "./style.module.css";
import { FooterLinks } from "@/mock";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Image src="/logo.jpeg" alt="logo" width={50} height={50} />
      <div className="gap-5 inline-flex">
        {FooterLinks.map((item) => {
          console.log("items", item);
          return (
            <>
              <span>{item.title}</span>
            </>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
