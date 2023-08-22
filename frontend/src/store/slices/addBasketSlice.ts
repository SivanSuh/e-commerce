import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BasketProps {
    count:number;
    cardItem:Array<any>
}

const initialState:BasketProps =  {
    count:0,
    cardItem:[]
}

const addBasketSlice = createSlice({
    name:"basket",
    initialState,
    reducers:{
        addBasket:(state,action) => {
            console.log("action payload",action.payload)
           const findCardItem = state.cardItem.find((item) => item._id === action.payload._id)
           if(findCardItem){
               console.log("find card",findCardItem.quantity)
            findCardItem.quantity = findCardItem.quantity + 1;
           }
           else {
            state.cardItem.push(action.payload)
           }
        }
    }
})

export const { addBasket } = addBasketSlice.actions;
export default addBasketSlice.reducer