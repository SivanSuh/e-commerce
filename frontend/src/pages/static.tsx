import Image from "next/image";
import { createPortal } from "react-dom";

export default function StaticImage({ post }: any) {
  console.log("post", post);
  return (
    <ul>
      {post.map((pos: any) => (
        <div className="inline-flex gap-3 p-1">
          <span>{pos.id}</span>
          <li>{pos.title}</li>
        </div>
      ))}
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
