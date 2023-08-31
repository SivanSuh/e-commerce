import Button from "@/components/Atoms/Button";
import ProductDetailProp from "./props";
import Style from "./style.module.css";
import { AppDispatch } from "@/store/store";
import { addBasket, removeBasket } from "@/store/slices/addBasketSlice";
import Link from "next/link";

const ProductDetail: React.FC<ProductDetailProp> = ({ detail }) => {
  console.log("detail sayfase", detail);

  const dispatch = AppDispatch();
  return (
    <main className={Style.container}>
      <Link href="/">Geri Dön</Link>
      <main className={Style.details}>
        <div className={Style.image}>
          <img src={detail.image} alt={detail.title} className="w-full" />
        </div>
        <div className={Style.description}>
          <p className={Style.title}>{detail.title}</p>
          <p>{detail.price} TL</p>
          <p>{detail.description}</p>
          <div className={Style.counter}>
            <Button
              title="-"
              color="black"
              bgColor="white"
              onClick={() => {
                dispatch(removeBasket(detail));
              }}
            />
            {/* <span className="mx-3">{detail.quantity}</span> */}
            <Button
              title="+"
              color="black"
              bgColor="white"
              onClick={() => {
                dispatch(addBasket(detail));
              }}
            />
          </div>
        </div>
      </main>
    </main>
  );
};

export default ProductDetail;
