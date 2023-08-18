import LoginModel from "@/modelsType/LoginModel";
import RegisterModel from "@/modelsType/RegisterModel";
import authService from "@/service/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cookies from 'js-cookie'

export const login = createAsyncThunk("login",async (body:LoginModel, {rejectWithValue}) => {
    try {
        const response = await authService.loginService(body)
        cookies.set("login",JSON.stringify(body))
        return response
    } catch (error) {
       return rejectWithValue(error)
    }
} )

interface AuthProps {
    formData:RegisterModel | null |unknown
    loading:boolean
    isLoggin:boolean
}
const initialState:AuthProps = {
    formData:null,
    loading:false,
    isLoggin:false
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
            //state.isLoggin = true
            state.formData = action.payload?.data
        })
        builder.addCase(login.pending,(state,action) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state,action) => {
            state.isLoggin = false
            state.formData =action.payload
        })
    }
})

export const { removeToken }  = authSlice.actions
export default authSlice.reducer