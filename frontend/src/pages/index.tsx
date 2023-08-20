import Card from "@/components/Products/Card";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginPage from "./auth/login";

export default function Home({ data }: any) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get("login")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login, data]);

  console.log("data", { data });
  console.log("cooki", Cookies.get("login"));
  return (
    <>
      {login ? (
        <Layout>
          <main className="p-5 flex items-start">
            <FilterSidebar category={data} />
            <Card data={data} />
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
