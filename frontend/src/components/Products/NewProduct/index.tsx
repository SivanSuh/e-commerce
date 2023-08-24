import Input from "@/components/Atoms/Input";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import SelectBox from "@/components/Atoms/Select";
import Button from "@/components/Atoms/Button";
import { AppDispatch } from "@/store/store";
import { AddNewProducts } from "@/store/slices/addProductSlice";
import NewProductProps from "./props";
import FileUpload from "@/components/Atoms/FileUpload";

const NewProduct: FC<NewProductProps> = ({ setOpenModal }) => {
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit } = useForm();
  const dispatch = AppDispatch();

  const onSubmit = async (data: any) => {
    await dispatch(AddNewProducts(data));

    setOpenModal?.(false);
  };

  // const handleFileUpload = (file: any) => {
  //   console.log("Uploaded file:", file);
  // };
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
        placeholder="Ürün Fotoğrafının yolunu ekleyiniz"
      />
      {/* <FileUpload
        register={register}
        title="Resim Ekleyiniz"
        id="image"
        name="image"
        onFileSelect={handleFileUpload}
      /> */}
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
