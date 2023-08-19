import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductCardModel from "@/modelsType/ProductCard"
import productService from "@/service/productService";

interface AddProductProps{
    data:ProductCardModel | null | unknown 
}

const initialState:AddProductProps = {
    data:null
}

export const AddNewProducts = createAsyncThunk("add-new-products", async (data:ProductCardModel, { rejectWithValue}) => {
    try {
        const res = await productService.addProducts(data)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
} )

const addProductSlice = createSlice({
    name:"add-product",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(AddNewProducts.fulfilled,(state,action) =>{
            state.data = action.payload
        })
    }
})

export default addProductSlice.reducer