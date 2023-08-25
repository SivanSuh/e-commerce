import Card from "@/components/Products/Card";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginPage from "./auth/login";
import { AppDispatch } from "@/store/store";
import { login } from "@/store/slices/authSlice";

export default function Home() {
  const [logins, setLogin] = useState(false);
  const [categories, setCategories] = useState("");
  const dispatch = AppDispatch();

  const refreshState = Cookies.get("login");
  useEffect(() => {
    if (refreshState) {
      setLogin(true);
      dispatch(login(JSON.parse(refreshState)));
    } else {
      setLogin(false);
    }
  }, [logins]);

  console.log("set değişti", setCategories);
  return (
    <>
      {logins ? (
        <Layout>
          <main className="p-5 flex items-start">
            <FilterSidebar setCategories={setCategories} />
            <Card categories={categories} />
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
