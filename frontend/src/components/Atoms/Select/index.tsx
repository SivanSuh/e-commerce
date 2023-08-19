import React, { FC } from "react";
import SelectBoxProps from "./props";
import { AiOutlineArrowDown } from "react-icons/ai";
import Style from "./style.module.css";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

// const SelectBox: FC<SelectBoxProps> = ({ array = [], id, required }) => {
//   const { register } = useForm();
//   return (
//     <select className={Style.select} {...register(id, { required })}>
//       {array.map((item) => (
//         <option value={item}>{item}</option>
//       ))}
//     </select>
//   );
// };
const SelectBox: FC<SelectBoxProps> = ({
  placeholder = "Lütfen Categori Seçiniz",
  register = () => {},
  name,
  data,
  watch,
  ...props
}) => {
  return (
    <div className=" relative  ">
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
