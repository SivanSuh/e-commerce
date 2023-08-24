import React, { useState } from "react";
import Style from "./style.module.css";
import CardProps from "./props";
import Button from "@/components/Atoms/Button";
import { AppDispatch } from "@/store/store";
import { addBasket } from "@/store/slices/addBasketSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const CardComponents: React.FC<CardProps> = ({ item }) => {
  const dispatch = AppDispatch();
  const [hover, setHover] = useState("hidden");
  const router = useRouter();

  const basket = () => {
    dispatch(addBasket({ ...item, quantity: 1 }));
  };

  const handleClick = (e: any) => {
    console.log("tıklandı", e);
  };

  return (
    <div
      className={Style.card}
      onClick={() => {
        router.push(`/products/${item.slug}?id=${item?._id}`);
      }}
      key={item?._id}
      onMouseEnter={() => setHover("visible")}
      onMouseLeave={() => setHover("hidden")}
    >
      <figure className={Style.figure}>
        <img src={item.image} alt={item.title} />
      </figure>
      <h2 className={Style.title}>{item.title}</h2>
      <p className={Style.price}>{item.price}</p>
      <div className="my-2 w-full" style={{ visibility: hover as any }}>
        <Button title="Add To Card" onClick={basket} bgColor="#fb8233" />
      </div>
    </div>
  );
};

export default CardComponents;
