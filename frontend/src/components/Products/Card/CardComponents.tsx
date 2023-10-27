import React, { useState } from "react";
import Style from "./style.module.css";
import CardProps from "./props";
import Button from "@/components/Atoms/Button";
import { AppDispatch } from "@/store/store";
import { addBasket } from "@/store/slices/addBasketSlice";
import { useRouter } from "next/router";

const CardComponents: React.FC<CardProps> = ({ item }) => {
  const dispatch = AppDispatch();
  const [hover, setHover] = useState("hidden");
  const router = useRouter();

  const basket = (e: any) => {
    e.stopPropagation();
    dispatch(addBasket({ ...item, quantity: 1 }));
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    router.push(`/products/${item?._id}`);
  };

  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  return (
    <div
      className={Style.card}
      key={item?._id}
      onClick={handleClick}
      onMouseEnter={() => setHover("visible")}
      onMouseLeave={() => setHover("hidden")}
    >
      <figure className={Style.figure}>
        <img src={`${baseUrl}/uploads/${item.image}`} alt={item.title} />
      </figure>
      <h2 className={Style.title}>{item.title}</h2>
      <p className={Style.price}>{item.price}</p>
      <div className="my-2 w-full" style={{ visibility: hover as any }}>
        <Button title="Add To Card" onClick={basket} bgColor="#fb8233" />
      </div>
    </div>
  );
};

export default React.memo(CardComponents);
