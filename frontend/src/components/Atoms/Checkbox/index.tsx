import React, { FC } from "react";
import Style from "./style.module.css";
import ChackboxProps from "./props";

const Checkbox: FC<ChackboxProps> = ({
  title,
  onClick,
  name,
  checked = true,
  defaultChecked = false,
}) => {
  return (
    <label className={Style.label}>
      <input
        type="radio"
        className={Style.checkbox}
        // checked={checked}
        defaultChecked={defaultChecked}
        name={"radio"}
        onChange={onClick}
        value={name}
      />
      <span className="mx-3">{title}</span>
    </label>
  );
};
export default Checkbox;
