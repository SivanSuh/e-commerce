import Checkbox from "@/components/Atoms/Checkbox";
import ProductCard from "@/modelsType/ProductCard";
import React from "react";

interface FilterSidebarProps {
  category: [];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ category }) => {
  return (
    <main>
      <h2 className="mb-3 font-bold">CATEGORY</h2>
      {category.map((item: ProductCard) => (
        <Checkbox title={item?.category} key={item._id} />
      ))}
    </main>
  );
};

export default FilterSidebar;
