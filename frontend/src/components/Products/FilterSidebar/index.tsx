import Checkbox from "@/components/Atoms/Checkbox";
import CategoryModel from "@/modelsType/CategoryModel";
import ProductCard from "@/modelsType/ProductCard";
import React from "react";

interface FilterSidebarProps {
  category: [];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ category }) => {
  return (
    <main className="sticky top-20">
      <h2 className="mb-3 font-bold">CATEGORY</h2>
      {category?.map((item: CategoryModel) => (
        <Checkbox title={item?.categoryName} key={item?._id} />
      ))}
    </main>
  );
};

export default FilterSidebar;
