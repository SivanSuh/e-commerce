import React, { FC } from "react";
import SelectBoxProps from "./props";
import { AiOutlineArrowDown } from "react-icons/ai";
import Style from "./style.module.css";

const SelectBox: FC<SelectBoxProps> = ({
  placeholder = "Lütfen Categori Seçiniz",
  register = () => {},
  name,
  data,
  watch,
  ...props
}) => {
  return (
    <div className="w-full">
      <select
        {...props}
        {...register(name as string)}
        name={name}
        placeholder={placeholder}
        className={Style.select}
      >
        <option value="">{placeholder}</option>
        {data?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {/* <div className="  absolute top-0 right-[20px] h-full flex  justify-end items-center w-full  pointer-events-none ">
        <AiOutlineArrowDown color="#CBCBCB" />
      </div> */}
    </div>
  );
};

export default SelectBox;
