import React, { FC } from "react";
import Style from "./style.module.css";

interface ChackboxProps {
  title: string;
}

const Checkbox: FC<ChackboxProps> = ({ title }) => {
  return (
    <label className="flex  whitespace-nowrap items-center mb-1 w-40">
      <input type="checkbox" className={Style.checkbox} />
      <span className="mx-3">{title}</span>
    </label>
  );
};
export default Checkbox;
