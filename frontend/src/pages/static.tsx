import React, { Suspense } from "react";
import Image from "next/image";
const Deneme = React.lazy(() => import("@/components/Deneme/index"));

export default function StaticImage({ post }: any) {
  console.log("post", post);

  return (
    <ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Deneme post={post} />
      </Suspense>
      <img src="/e-commerce.png" alt="e commerce" width={200} />
      <Image src="/e-commerce.png" alt="deneme" width={500} height={100} />
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
