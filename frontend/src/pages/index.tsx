import Card from "@/components/Products/Card";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginPage from "./auth/login";
import { AppDispatch } from "@/store/store";
import { login } from "@/store/slices/authSlice";
import { useRouter } from "next/router";

function Home() {
  const [logins, setLogin] = useState(false);
  const [categories, setCategories] = useState("");
  const dispatch = AppDispatch();
  const router = useRouter();

  const refreshState = Cookies.get("login");
  useEffect(() => {
    if (refreshState) {
      setLogin(true);
      dispatch(login(JSON.parse(refreshState)));
    } else {
      setLogin(false);
      router.push("/auth/login");
    }
  }, [logins, dispatch]);

  console.log("seçilen categori", categories);

  // const handleChange = (e: any) => {
  //   // const item = e.target.name;
  //   const isChecked = e.target.checked;
  //   console.log("is checkled", isChecked);
  //   // console.log("nameee", item);
  // };
  return (
    <>
      {logins ? (
        <Layout>
          <main className="p-5 flex items-start">
            <FilterSidebar
              setCategories={setCategories}
              categories={categories}
            />

            <Card categories={categories} />
          </main>
        </Layout>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Home;

// export async function getServerSideProps() {
//   const res = await service.getProducts();

//   return {
//     props: {
//       data: res.data,
//     },
//   };
// }
