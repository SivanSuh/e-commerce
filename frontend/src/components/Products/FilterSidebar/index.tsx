import Checkbox from "@/components/Atoms/Checkbox";
import CategoryModel from "@/modelsType/CategoryModel";
import { getAllCategories } from "@/store/slices/getCategories";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

interface FilterSidebarProps {
  setCategories: (item: string) => void;
  categories: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  setCategories,
  categories,
}) => {
  const { category } = useSelector((state: RootState) => state.getCategories);

  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  console.log("categorys ile", category);
  console.log("categories", categories);

  return (
    <main className="sticky top-20">
      <h2 className="mb-3 font-bold">CATEGORY</h2>
      <Checkbox
        checked={true}
        name="radio"
        onClick={() => dispatch(getAllCategories())}
        title="All"
      />
      {category?.map((item: CategoryModel, index: any) => {
        return (
          <Checkbox
            checked={item?._id === categories}
            title={item?.categoryName}
            key={item?._id}
            name={item?.categoryName}
            onClick={() => {
              setCategories(item?._id);
            }}
          />
        );
      })}
    </main>
  );
};

export default FilterSidebar;
