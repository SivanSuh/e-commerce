import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Style from "./style.module.css";
import Button from "../Atoms/Button";

const Basket = () => {
  const { cardItem } = useSelector((state: RootState) => state.basket);
  return (
    <main className={Style.container}>
      {cardItem?.map((item) => (
        <div className={Style.basket} key={item._id}>
          <p className="w-40">{item.title}</p>
          <figure className="mx-5">
            <img
              src={item.image}
              alt={item.title}
              className="h-28 w-40 object-contain"
            />
          </figure>
          <p className="">{item.price}</p>
          <div className={Style.counter}>
            <Button title="-1" />
            <span className="mx-3">{item.quantity}</span>
            <Button title="+1" />
          </div>
        </div>
      ))}
    </main>
  );
};
export default Basket;
