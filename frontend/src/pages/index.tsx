import Card from "@/components/Products/Card";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";
import Layout from "@/components/Layout";

export default function Home({ data }: any) {
  return (
    <>
      <Layout />
      <main className="p-5 flex items-start">
        <FilterSidebar category={data} />
        <Card data={data} />
      </main>
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
