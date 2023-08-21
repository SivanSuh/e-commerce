import React, { FC, useState } from "react";
import Style from "./style.module.css";
import ProductCard from "@/modelsType/ProductCard";
import { SlBasket } from "react-icons/sl";
import Button from "@/components/Atoms/Button";
import PopupModal from "@/components/PopupModal";
import NewProduct from "../NewProduct";

interface CardProps {
  data: ProductCard[];
}

const Card: FC<CardProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log("card data", data);

  return (
    <template className={Style.column}>
      <div className={Style.newProduct}>
        <Button title="Yeni Ürün Oluştur" onClick={() => setOpenModal(true)} />
      </div>
      <main className={Style.cardContainer}>
        {data?.map((item: ProductCard) => (
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
              <Button title="Add To Card" bgColor="#fb8233" />
            </div>
          </div>
        ))}
      </main>

      <PopupModal close={setOpenModal} open={openModal}>
        <NewProduct setOpenModal={setOpenModal} />
      </PopupModal>
    </template>
  );
};

export default React.memo(Card);
