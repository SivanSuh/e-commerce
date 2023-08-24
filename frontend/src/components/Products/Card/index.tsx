import React, { FC, useState } from "react";
import Style from "./style.module.css";
import ProductCard from "@/modelsType/ProductCard";
import PopupModal from "@/components/PopupModal";
import NewProduct from "../NewProduct";
import CardComponents from "./CardComponents";
import Button from "@/components/Atoms/Button";

interface CardProps {
  data: ProductCard[];
}

const Card: FC<CardProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <template className={Style.column}>
      <div className={Style.newProduct}>
        <Button title="Yeni Ürün Oluştur" onClick={() => setOpenModal(true)} />
      </div>
      <main className={Style.cardContainer}>
        {data?.map((item: ProductCard) => (
          <CardComponents item={item} key={item._id} />
        ))}
      </main>

      <PopupModal close={setOpenModal} open={openModal}>
        <NewProduct setOpenModal={setOpenModal} />
      </PopupModal>
    </template>
  );
};

export default React.memo(Card);
