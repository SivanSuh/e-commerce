import React, { FC } from "react";

interface ChackboxProps {
  title: string;
}

const Checkbox: FC<ChackboxProps> = ({ title }) => {
  return (
    <label className="flex  whitespace-nowrap items-center">
      <input type="checkbox" />
      <span className="mx-2">{title}</span>
    </label>
  );
};
export default Checkbox;
