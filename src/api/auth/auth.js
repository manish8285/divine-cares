import { myAxios } from "../base";

export const signupApi=async(data) => {
    const response = await myAxios.post('user/signup',data)
    return response.data
}

export const signupAdminApi=async(data) => {
    const response = await myAxios.post('admin/signup',data)
    return response.data
}

export const signinApi=async(data) => {
    const response = await myAxios.post('user/signin',data)
    return response.data
}

export const signinAdminApi=async(data) => {
    const response = await myAxios.post('admin/signin',data)
    return response.data
}