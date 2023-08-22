import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductCardModel from "@/modelsType/ProductCard"
import productService from "@/service/productService";
import CategoryModel from "@/modelsType/ProductCard";

interface AddProductProps{
    datas:ProductCardModel | null | unknown | CategoryModel
}

const initialState:AddProductProps = {
    datas:[]
}

export const AddNewProducts = createAsyncThunk("add-new-products", async (data:ProductCardModel, { rejectWithValue}) => {
    try {
        const res = await productService.addProducts(data)
        return res
    } catch (error) {
        return rejectWithValue(error)
    }
} )

export const getAllProduct = createAsyncThunk("get-products", async () => {
    try {
        const res = await productService.getProducts()
        return res
    } catch (error) {
        return console.log(error)
    }
} )

const addProductSlice = createSlice({
    name:"add-product",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(AddNewProducts.fulfilled,(state,action) =>{
            state.datas = action.payload
        })
        builder.addCase(getAllProduct.fulfilled,(state,action) => {
            state.datas = action.payload?.data
        })
    }
})

export default addProductSlice.reducer