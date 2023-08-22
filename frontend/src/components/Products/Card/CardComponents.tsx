import React from "react";
import Style from "./style.module.css";
import CardProps from "./props";
import Button from "@/components/Atoms/Button";
import { AppDispatch } from "@/store/store";
import { addBasket } from "@/store/slices/addBasketSlice";

const CardComponents: React.FC<CardProps> = ({ item }) => {
  const dispatch = AppDispatch();

  const basket = () => {
    dispatch(addBasket({ ...item, quantity: 1 }));
  };

  return (
    <div className={Style.card} key={item?._id}>
      <figure className={Style.figure}>
        <img src={item.image} alt={item.title} />
        {/* <div className={Style.icon}>
          <SlBasket size={30} />
        </div> */}
      </figure>
      <h2 className={Style.title}>{item.title}</h2>
      <p className={Style.price}>{item.price}</p>
      <div className="my-2 w-full">
        <Button title="Add To Card" onClick={basket} bgColor="#fb8233" />
      </div>
    </div>
  );
};

export default CardComponents;
