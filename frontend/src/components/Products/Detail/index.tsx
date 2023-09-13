import Button from "@/components/Atoms/Button";
import ProductDetailProp from "./props";
import Style from "./style.module.css";
import { AppDispatch, RootState } from "@/store/store";
import { addBasket, removeBasket } from "@/store/slices/addBasketSlice";
import Link from "next/link";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useSelector } from "react-redux";

const ProductDetail: React.FC<ProductDetailProp> = ({ detail }) => {
  console.log("detail sayfase", detail);
  const { cardItem } = useSelector((state: RootState) => state.basket);

  const dispatch = AppDispatch();
  const filterValue = cardItem.find((item) => item._id === detail._id);
  console.log("f,lter", filterValue);
  return (
    <main className={Style.container}>
      <Link href="/">
        <AiOutlineDoubleLeft size={25} />
      </Link>
      <main className={Style.details}>
        <div className={Style.image}>
          <img src={detail?.image} alt={detail?.title} className="w-full" />
        </div>
        <div className={Style.description}>
          <p className={Style.title}>{detail?.title}</p>
          <p className={Style.price}>{detail?.price} TL</p>
          <p>{detail?.description}</p>
          <div className={Style.counter}>
            {filterValue && (
              <Button
                title="-"
                color="black"
                bgColor="white"
                onClick={() => {
                  dispatch(removeBasket(detail));
                }}
              />
            )}
            <span className="mx-3">
              {filterValue ? filterValue?.quantity : 0}
            </span>
            <Button
              title="+"
              color="black"
              bgColor="white"
              onClick={() => {
                dispatch(addBasket({ ...detail, quantity: 1 }));
              }}
            />
          </div>
        </div>
      </main>
    </main>
  );
};

export default ProductDetail;
