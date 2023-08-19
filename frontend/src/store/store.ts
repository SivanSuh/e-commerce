import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { useDispatch } from "react-redux";
import addProductSlice from "./slices/addProductSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        addProduct:addProductSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export const AppDispatch :() => typeof store.dispatch = useDispatch