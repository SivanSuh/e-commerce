import Layout from "@/components/Layout";
import ProductDetail from "@/components/Products/Detail";
import { getSelectProduct } from "@/store/slices/addProductSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = AppDispatch();
  const { datas } = useSelector((state: RootState) => state.addProduct);

  useEffect(() => {
    dispatch(getSelectProduct(slug as string));
  }, [dispatch, slug]);
  console.log("get  select datra", datas);
  console.log("get  select slug", slug);
  return (
    <Layout>
      <ProductDetail detail={datas} />
    </Layout>
  );
}
