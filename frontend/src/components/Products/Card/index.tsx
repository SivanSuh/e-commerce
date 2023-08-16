import React from "react";
import Style from "./style.module.css";
import products from "@/mock/products";

const Card = () => {
  return (
    <main className={Style.cardContainer}>
      {products.map((item) => (
        <div className={Style.card} key={item.id}>
          <figure className={Style.figure}>
            <img src={item.image} alt={item.title} loading="lazy" />
          </figure>
          <h2 className={Style.title}>{item.title}</h2>
        </div>
      ))}
    </main>
  );
};

export default Card;
