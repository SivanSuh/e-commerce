import Input from "@/components/Atoms/Input";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import SelectBox from "@/components/Atoms/Select";

const NewProduct = () => {
  const { register } = useForm();
  return (
    <form className={Style.form}>
      <Input
        register={register}
        id="productName"
        name="productName"
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
        id="picture"
        name="picture"
        placeholder="Ürün Fotoğrafı"
      />
      <SelectBox array={["tsort", "jacket", "accessory"]} />
    </form>
  );
};

export default NewProduct;
