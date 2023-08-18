import LoginModel from "@/modelsType/LoginModel";
import { api } from "./api";
import RegisterModel from "@/modelsType/RegisterModel";


const loginService = async (data:LoginModel) => {
    return api({
        url:"/auth/login",
        method:"POST",
        data
    })
}
const registerService = async (data:RegisterModel) => {
    return api({
        url:"/auth/register",
        method:"POST",
        data
    })
}
const authService = {
    loginService,
    registerService
}

export default authService