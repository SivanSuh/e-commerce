import Navbar from "@/components/Navbar";
import Card from "@/components/Products/Card";
import Checkbox from "@/components/Atoms/Checkbox";
import service from "../service/productService";
import FilterSidebar from "@/components/Products/FilterSidebar";

export default function Home({ data }: any) {
  console.log("ress", data);
  return (
    <>
      <Navbar />
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
