import Input from "@/components/Atoms/Input";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import SelectBox from "@/components/Atoms/Select";
import Button from "@/components/Atoms/Button";
import { AppDispatch } from "@/store/store";
import { AddNewProducts } from "@/store/slices/addProductSlice";
import NewProductProps from "./props";

const NewProduct: FC<NewProductProps> = ({ setOpenModal }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = AppDispatch();

  const onSubmit = async (data: any) => {
    await dispatch(AddNewProducts(data));
    setOpenModal?.(false);
  };
  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="title"
        name="title"
        placeholder="Ürün Adı"
      />
      <Input
        register={register}
        id="price"
        name="price"
        placeholder="Ürün Fiyatı"
      />
      <Input
        register={register}
        id="image"
        name="image"
        placeholder="Ürün Fotoğrafı"
      />
      <SelectBox
        data={["tsort", "jacket", "accessory"]}
        register={register}
        id="category"
        name="category"
      />
      <Button title="Ürün Ekle" type="submit" />
    </form>
  );
};

export default NewProduct;
