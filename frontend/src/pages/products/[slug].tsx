import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <Layout>
      <p>Post : {router.query.slug} </p>
    </Layout>
  );
}
