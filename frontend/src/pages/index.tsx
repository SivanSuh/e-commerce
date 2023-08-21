import Card from "@/components/Products/Card";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";
import Layout from "@/components/Layout";
import { useEffect, useLayoutEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginPage from "./auth/login";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { getAllProduct } from "@/store/slices/addProductSlice";
import { getAllCategories } from "@/store/slices/getCategories";

export default function Home({ data }: any) {
  const { datas } = useSelector((state: RootState) => state.addProduct);
  const { category } = useSelector((state: RootState) => state.getCategories);
  const [login, setLogin] = useState(false);

  const dispatch = AppDispatch();
  useLayoutEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    if (Cookies.get("login")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login, data]);
  console.clear();
  console.log("products", datas);
  console.log("category list", category);
  return (
    <>
      {login ? (
        <Layout>
          <main className="p-5 flex items-start">
            <FilterSidebar category={category} />
            <Card data={datas} />
          </main>
        </Layout>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const res = await service.getProducts();

  return {
    props: {
      data: res.data,
    },
  };
}
