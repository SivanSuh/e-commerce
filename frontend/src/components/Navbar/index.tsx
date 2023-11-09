import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const { formData } = useSelector((state: RootState) => state.auth);
  const { cardItem } = useSelector((state: RootState) => state.basket);
  const { getData } = useSelector((state: RootState) => state.addProduct);

  const [searchItem, setSearchItem] = useState("");
  const dispatch = AppDispatch();
  const router = useRouter();
  useEffect(() => {}, [dispatch]);

  console.clear();
  console.log("get data", getData);
  const filteredData = getData?.filter((user) =>
    user.title.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <nav className={Style.nav}>
      <div className={Style.container}>
        <Link href="/">
          <Image src="/logo.jpeg" alt="logo" width={50} height={50} />
        </Link>
        {/* <input placeholder="Enter anytihnk" /> */}
        {formData?.user ? (
          <div className={Style.login}>
            <Link href="/basket">
              <div className={Style.basket}>
                <SlBasket size={30} />
                <span className="absolute right-0 -top-4 z-10 text-red-500 text-xl">
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
            <Button
              title="Çıkış Yap"
              onClick={() => {
                dispatch(logout());
                router.push("/auth/login");
              }}
            />
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
