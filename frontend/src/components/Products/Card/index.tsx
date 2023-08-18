import React, { FC, useState } from "react";
import Style from "./style.module.css";
import products from "@/mock/products";
import ProductCard from "@/modelsType/ProductCard";
import { SlBasket } from "react-icons/sl";
import Button from "@/components/Atoms/Button";

interface CardProps {
  data: ProductCard[];
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <main className={Style.cardContainer}>
      {data?.map((item: ProductCard) => (
        <div className={Style.card} key={item?._id}>
          <figure className={Style.figure}>
            <img src={item.image} alt={item.title} />
            <div className={Style.icon}>
              <SlBasket size={30} />
            </div>
          </figure>
          <h2 className={Style.title}>{item.title}</h2>
          <p className={Style.price}>{item.price}</p>
          <div className="my-2 w-full">
            <Button title="Add To Card" />
          </div>
        </div>
      ))}
    </main>
  );
};

export default React.memo(Card);
