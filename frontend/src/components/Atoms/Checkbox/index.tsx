import React, { FC } from "react";
import Style from "./style.module.css";

interface ChackboxProps {
  title: string;
}

const Checkbox: FC<ChackboxProps> = ({ title }) => {
  return (
    <label className={Style.label}>
      <input type="checkbox" className={Style.checkbox} />
      <span className="mx-3">{title}</span>
    </label>
  );
};
export default Checkbox;
