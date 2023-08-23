import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BasketProps {
  count: number;
  cardItem: Array<any>;
}

const initialState: BasketProps = {
  count: 0,
  cardItem: [],
};

const addBasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      console.log("action payload", action.payload);
      const findCardItem = state.cardItem.find(
        (item) => item._id === action.payload._id
      );
      if (findCardItem) {
        console.log("find card", findCardItem.quantity);
        findCardItem.quantity = findCardItem.quantity + 1;
      } else {
        state.cardItem.push(action.payload);
      }
    },
    removeBasket: (state, action) => {
      const findCardItem = state.cardItem.find(
        (item) => item._id === action.payload._id
      );

      console.log("silme ", findCardItem.quantity);
      findCardItem.quantity = findCardItem.quantity - 1;
      if (findCardItem.quantity === 0) {
        state.cardItem.splice(findCardItem.quantity,1)
      }
    },
  },
});

export const { addBasket, removeBasket } = addBasketSlice.actions;
export default addBasketSlice.reducer;
