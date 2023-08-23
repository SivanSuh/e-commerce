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
import { login } from "@/store/slices/authSlice";

export default function Home() {
  const { getData } = useSelector((state: RootState) => state.addProduct);
  const { category } = useSelector((state: RootState) => state.getCategories);
  const [logins, setLogin] = useState(false);

  const dispatch = AppDispatch();
  useLayoutEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const refreshState = Cookies.get("login");
  useEffect(() => {
    if (refreshState) {
      setLogin(true);
      dispatch(login(JSON.parse(refreshState)));
    } else {
      setLogin(false);
    }
  }, [logins]);

  console.log("refresh state", refreshState);

  return (
    <>
      {logins ? (
        <Layout>
          <main className="p-5 flex items-start">
            <FilterSidebar category={category} />
            <Card data={getData} />
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
