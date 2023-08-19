import Card from "@/components/Products/Card";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginPage from "./auth/login";
import Button from "@/components/Atoms/Button";
import PopupModal from "@/components/PopupModal";

export default function Home({ data }: any) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (Cookies.get("login")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <>
      {login ? (
        <>
          <Layout />
          <main className="p-5 flex items-start">
            <FilterSidebar category={data} />
            <Card data={data} />
          </main>
        </>
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
