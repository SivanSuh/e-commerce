import LoginModel from "@/modelsType/LoginModel";
import RegisterModel from "@/modelsType/RegisterModel";
import authService from "@/service/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("login",async (body:LoginModel, {rejectWithValue}) => {
    try {
        const response = await authService.loginService(body)
        return response
    } catch (error) {
        rejectWithValue(error)
    }
} )

interface AuthProps {
    formData:RegisterModel | null |unknown
    loading:boolean
}
const initialState:AuthProps = {
    formData:null,
    loading:false
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        removeToken(){
            return
        }
    },
    extraReducers:(builder) => {
        builder.addCase(login.fulfilled,(state,action) => {
            state.formData = action.payload
        })
        builder.addCase(login.pending,(state,action) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state,action) => {
            state.formData =action.payload
        })
    }
})

export const { removeToken }  = authSlice.actions
export default authSlice.reducer