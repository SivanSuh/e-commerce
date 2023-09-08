import React from "react";

interface Posts {
  post: Array<any>;
}
const Deneme: React.FC<Posts> = ({ post }) => {
  return (
    <>
      {post.map((pos: any) => (
        <div className="inline-flex gap-3 p-1" key={pos.id}>
          <span>{pos.id}</span>
          <li>{pos.title}</li>
        </div>
      ))}
    </>
  );
};

export default Deneme;
