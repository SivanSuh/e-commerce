import React, { FC } from "react";
import Style from "./style.module.css";
import BasketCardProps from "./props";

const BasketCard: FC<BasketCardProps> = ({ price }) => {
  return (
    <aside className={Style.aside}>
      <p className={Style.total}>Toplam Tutar</p>
      {price && <p className={Style.price}>{price} TL</p>}
    </aside>
  );
};

export default BasketCard;
