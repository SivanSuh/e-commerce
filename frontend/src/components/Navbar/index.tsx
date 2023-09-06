import React from "react";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { formData } = useSelector((state: RootState) => state.auth);
  const { cardItem } = useSelector((state: RootState) => state.basket);

  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <Link href="/">
          <Image src="/logo.jpeg" alt="logo" width={50} height={50} />
        </Link>
        {formData?.user ? (
          <div className={Style.login}>
            <Link href="/basket">
              <div className={Style.basket}>
                <SlBasket size={30} />
                <span className="absolute right-0 -top-5 z-10 text-red-500 text-2xl">
                  {cardItem.length}
                </span>
              </div>
            </Link>
            <h2 className="mx-2 whitespace-nowrap">
              {formData?.user?.userName}
            </h2>
            <Link href="/profile">
              <div className={Style.imageContainer}>
                <img
                  src={formData?.user?.image}
                  alt={formData?.user?.userName}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </Link>
            <Button title="Çıkış Yap" link href="/auth/login" />
          </div>
        ) : (
          <div className={Style.login}>
            <Button title="Kayıt Ol" link href="/auth/login" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
