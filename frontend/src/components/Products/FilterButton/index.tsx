import React, { FC } from "react";

interface FilterButtonProps {
  title: string;
}

const FilterButton: FC<FilterButtonProps> = ({ title = "Filterla" }) => {
  return <button>{title}</button>;
};

export default FilterButton;
