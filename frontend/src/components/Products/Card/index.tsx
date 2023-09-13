import React, { FC, useEffect, useState } from "react";
import Style from "./style.module.css";
import ProductCard from "@/modelsType/ProductCard";
import PopupModal from "@/components/PopupModal";
import NewProduct from "../NewProduct";
import CardComponents from "./CardComponents";
import Button from "@/components/Atoms/Button";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from "react-redux";
import {
  getAllProduct,
  selectCategories,
} from "@/store/slices/addProductSlice";
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
      dispatch(selectCategories(categories));
    } else {
      dispatch(getAllProduct());
    }
  }, [dispatch, categories]);

  console.log("get data", getData);

  return (
    <template className={Style.column}>
      <div className={Style.newProduct}>
        <Button title="Yeni Ürün Oluştur" onClick={() => setOpenModal(true)} />
      </div>
      <main className={Style.cardContainer}>
        {status == "LOADING" ? (
          <Loading />
        ) : (
          <>
            {getData.length !== 0 ? (
              getData?.map((item: ProductCard) => (
                <CardComponents item={item} key={item._id} />
              ))
            ) : (
              <p>Belirtilen Kategoriye Ait Ürün Yoktur.</p>
            )}
          </>
        )}
      </main>

      <PopupModal close={setOpenModal} open={openModal}>
        <NewProduct setOpenModal={setOpenModal} />
      </PopupModal>
    </template>
  );
};

export default Card;
