import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Style from "./style.module.css";

const Basket = () => {
  const { cardItem } = useSelector((state: RootState) => state.basket);
  return (
    <main className={Style.container}>
      {cardItem?.map((item) => (
        <div className={Style.basket} key={item._id}>
          <p>{item.title}</p>
          <figure>
            <img src={item.image} alt={item.title} className="h-28" />
          </figure>
          <p>{item.price}</p>
        </div>
      ))}
    </main>
  );
};
export default Basket;
