import React, { FC } from "react";
import Style from "./style.module.css";
import products from "@/mock/products";
import ProductCard from "@/modelsType/ProductCard";

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
          </figure>
          <h2 className={Style.title}>{item.title}</h2>
          <p className={Style.price}>{item.price}</p>
        </div>
      ))}
    </main>
  );
};

export default React.memo(Card);
