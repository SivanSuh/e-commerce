import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductCardModel from "@/modelsType/ProductCard"
import productService from "@/service/productService";
import CategoryModel from "@/modelsType/ProductCard";
import { STATUS } from "@/utils/status"

interface AddProductProps{
    datas:ProductCardModel | null | unknown 
    getData:Array<CategoryModel>
    status:any
}

const initialState:AddProductProps = {
    datas:[],
    getData:[],
    status:STATUS.IDLE
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
export const getSelectProduct = createAsyncThunk("select-products", async (id:string) => {
    try {
        const res = await productService.selectProduct(id)
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
            state.status =STATUS.SUCCESS
            state.getData = action.payload?.data
        })
        builder.addCase(getAllProduct.pending,(state,action) => {
            state.status = STATUS.LOADIN
        })
        builder.addCase(getAllProduct.rejected,(state,action) => {
            state.status = STATUS.FAIL
        })
        builder.addCase(getSelectProduct.fulfilled,(state,action) => {
            state.getData = action.payload?.data
        })
    }
})

export default addProductSlice.reducer