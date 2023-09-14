import Input from "@/components/Atoms/Input";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Style from "./style.module.css";
import SelectBox from "@/components/Atoms/Select";
import Button from "@/components/Atoms/Button";
import { AppDispatch, RootState } from "@/store/store";
import { AddNewProducts } from "@/store/slices/addProductSlice";
import NewProductProps from "./props";
import FileUpload from "@/components/Atoms/FileUpload";
import { useSelector } from "react-redux";
import CategoryModel from "@/modelsType/CategoryModel";

const NewProduct: FC<NewProductProps> = ({ setOpenModal }) => {
  // const [file, setFile] = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = useState<null | any | File>(null);

  const { category } = useSelector((state: RootState) => state.getCategories);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = AppDispatch();

  const onSubmit = async (data: any) => {
    const { title, price, description, category, image } = data;
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    console.clear();
    console.log("data", data);
    console.log("values", formData);
    await dispatch(AddNewProducts(formData as any));

    // setOpenModal?.(false);
  };
  console.log("hatlara", errors);
  useEffect(() => {}, [dispatch]);
  console.log("form categori", category);
  const formCategory = category?.map((item) => item.categoryName);
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
        type="number"
        name="price"
        placeholder="Ürün Fiyatı"
      />
      <Input
        register={register}
        id="description"
        name="description"
        placeholder="Ürün Açıklaması"
      />
      {/* <Input
        register={register}
        id="image"
        name="image"
        placeholder="Ürün Fotoğrafının yolunu ekleyiniz"
      /> */}
      <FileUpload
        register={register}
        title="Resim Ekleyiniz"
        id="image"
        name="image"
        setSelectedFile={setSelectedFile}
      />
      <SelectBox
        data={formCategory}
        register={register}
        id="category"
        name="category"
      />
      <Button title="Ürün Ekle" type="submit" />
    </form>
  );
};

export default NewProduct;
