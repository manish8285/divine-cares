import { myAxios } from "../base";

export const signupApi=async(data) => {
    const response = await myAxios.post('user/signup',data)
    return response.data
}

export const signinApi=async(data) => {
    const response = await myAxios.post('user/signin',data)
    return response.data
}