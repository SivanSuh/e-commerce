import React, { FC } from "react";
import SelectBoxProps from "./props";
import Style from "./style.module.css";

const SelectBox: FC<SelectBoxProps> = ({ array = [] }) => {
  return (
    <select className={Style.select}>
      {array.map((item) => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
};

export default SelectBox;
