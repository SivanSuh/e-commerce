import React, { FC } from "react";
import Style from "./style.module.css";

interface ChackboxProps {
  title: string;
}

const Checkbox: FC<ChackboxProps> = ({ title }) => {
  return (
    <label className="flex  whitespace-nowrap items-center">
      <input type="checkbox" className={Style.checkbox} />
      <span className="mx-2">{title}</span>
    </label>
  );
};
export default Checkbox;
