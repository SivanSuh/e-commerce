import CategoryModel from "@/modelsType/CategoryModel";
import productService from "@/service/productService";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCategories = createAsyncThunk("get-all-categories", async () => {
    try {
        const res = await productService.getAllCategory();
        return res
    } catch (error) {
        console.log(error)
    }
})

interface CategoryType {
    category:CategoryModel | null;
    isLoading:boolean
    error:string
}

const initialState:CategoryType = {
    category:null,
    isLoading:false,
    error:""
}

const getCategories = createSlice({
    name:"get-categories",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getAllCategories.fulfilled,(state,action:PayloadAction<any>) => {
          state.category = action.payload.data
        });
        builder.addCase(getAllCategories.pending,(state,action) => {
            state.isLoading = true
        })
    }
})

export default getCategories.reducer