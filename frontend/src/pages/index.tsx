import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Card from "@/components/Products/Card";
import Checkbox from "@/components/Atoms/Checkbox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-5 flex items-start">
        <Checkbox title="Electronic" />
        <Card />
      </main>
    </>
  );
}
