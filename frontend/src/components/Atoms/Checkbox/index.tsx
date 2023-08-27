import React, { FC } from "react";
import Style from "./style.module.css";

interface ChackboxProps {
  title: string;
  onClick: () => void;
  // checked: string;
  name: string;
}

const Checkbox: FC<ChackboxProps> = ({ title, onClick, name }) => {
  return (
    <label className={Style.label}>
      <input
        type="checkbox"
        className={Style.checkbox}
        //checked={checked}
        onChange={onClick}
        value={name}
      />
      <span className="mx-3">{title}</span>
    </label>
  );
};
export default Checkbox;
