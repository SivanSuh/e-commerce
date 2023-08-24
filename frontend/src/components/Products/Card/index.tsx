import React, { FC, useEffect, useState } from "react";
import Style from "./style.module.css";
import ProductCard from "@/modelsType/ProductCard";
import PopupModal from "@/components/PopupModal";
import NewProduct from "../NewProduct";
import CardComponents from "./CardComponents";
import Button from "@/components/Atoms/Button";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { getAllProduct } from "@/store/slices/addProductSlice";
import Loading from "@/components/Loading";

interface CardProps {
  categories: any;
}

const Card: React.FC<CardProps> = ({ categories }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = AppDispatch();

  const { getData, status } = useSelector(
    (state: RootState) => state.addProduct
  );

  useEffect(() => {
    if (categories) {
      dispatch(getAllProduct());
    } else {
      dispatch(getAllProduct());
    }
  }, [dispatch, categories]);

  return (
    <template className={Style.column}>
      <div className={Style.newProduct}>
        <Button title="Yeni Ürün Oluştur" onClick={() => setOpenModal(true)} />
      </div>
      <main className={Style.cardContainer}>
        {status == "LOADING" ? (
          <Loading />
        ) : (
          getData?.map((item: ProductCard) => (
            <CardComponents item={item} key={item._id} />
          ))
        )}
      </main>

      <PopupModal close={setOpenModal} open={openModal}>
        <NewProduct setOpenModal={setOpenModal} />
      </PopupModal>
    </template>
  );
};

export default React.memo(Card);
