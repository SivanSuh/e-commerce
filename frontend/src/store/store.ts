import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { useDispatch } from "react-redux";
import addProductSlice from "./slices/addProductSlice";
import getCategories from "./slices/getCategories";
import addBasketSlice from "./slices/addBasketSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        addProduct:addProductSlice,
        getCategories:getCategories,
        basket:addBasketSlice
    },
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:false
        })
})


export type RootState = ReturnType<typeof store.getState>
export const AppDispatch :() => typeof store.dispatch = useDispatch