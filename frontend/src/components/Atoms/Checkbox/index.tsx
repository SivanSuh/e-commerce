import React, { FC } from "react";
import Style from "./style.module.css";

interface ChackboxProps {
  title: string;
  onClick: () => void;
}

const Checkbox: FC<ChackboxProps> = ({ title, onClick }) => {
  return (
    <label className={Style.label}>
      <input type="checkbox" className={Style.checkbox} onClick={onClick} />
      <span className="mx-3">{title}</span>
    </label>
  );
};
export default Checkbox;
