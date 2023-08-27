import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import BasketCard from "./BasketCard";
import { addBasket, removeBasket } from "@/store/slices/addBasketSlice";

const Basket = () => {
  const { cardItem } = useSelector((state: RootState) => state.basket);
  let total = 0;
  const dispatch = AppDispatch();

  return (
    <main className={Style.container}>
      <div className="flex flex-col w-3/4 gap-5">
        {cardItem.length !== 0 ? (
          cardItem?.map((item) => {
            total += item.price * item.quantity;
            return (
              <div className={Style.basket} key={item._id}>
                <div className="flex">
                  <figure>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 w-40 object-contain"
                    />
                  </figure>
                  <div className={Style.buttonContainer}>
                    <p className="w-40">{item.title}</p>
                    <div className={Style.counter}>
                      <Button
                        title="-"
                        color="black"
                        bgColor="white"
                        onClick={() => {
                          dispatch(removeBasket(item));
                        }}
                      />
                      <span className="mx-3">{item.quantity}</span>
                      <Button
                        title="+"
                        color="black"
                        bgColor="white"
                        onClick={() => {
                          dispatch(addBasket(item));
                        }}
                      />
                    </div>
                  </div>
                </div>

                <p className="font-bold">{`${
                  item.price * item.quantity
                } TL`}</p>
              </div>
            );
          })
        ) : (
          <p className="text-center font-bold">
            Sepetinizde herhangi bir ürün bulunmamaktadır.
          </p>
        )}
      </div>
      <BasketCard price={total} />
    </main>
  );
};
export default Basket;
