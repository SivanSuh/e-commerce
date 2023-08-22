import React, { useState } from "react";
import Style from "./style.module.css";
import CardProps from "./props";
import Button from "@/components/Atoms/Button";
import { AppDispatch } from "@/store/store";
import { addBasket } from "@/store/slices/addBasketSlice";

const CardComponents: React.FC<CardProps> = ({ item }) => {
  const dispatch = AppDispatch();
  const [hover, setHover] = useState("none");

  const basket = () => {
    dispatch(addBasket({ ...item, quantity: 1 }));
  };

  return (
    <div
      className={Style.card}
      key={item?._id}
      onMouseEnter={() => setHover("flex")}
      onMouseLeave={() => setHover("none")}
    >
      <figure className={Style.figure}>
        <img src={item.image} alt={item.title} />
      </figure>
      <h2 className={Style.title}>{item.title}</h2>
      <p className={Style.price}>{item.price}</p>
      <div
        className="my-2 w-full ease-in-out duration-300"
        style={{ display: hover }}
      >
        <Button title="Add To Card" onClick={basket} bgColor="#fb8233" />
      </div>
    </div>
  );
};

export default CardComponents;
