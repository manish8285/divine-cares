import { authAxios, authAxiosAdmin, myAxios } from "../base"


export const getUserOrdersApi=async() => {
    const response = await authAxios.get(`orders/user`)
    return response.data
}

export const getAdminOrdersApi=async() => {
    const response = await authAxiosAdmin.get(`orders/admin`)
    return response.data
}

export const getOrderByViewTokenApi=async(viewToken) => {
    const response = await myAxios.get(`orders/viewToken/${viewToken}`)
    return response.data
}

export const createOrderByUserApi=async(order) => {
    const response = await authAxios.post(`orders/user`,order)
    return response.data
}

export const createOrderByAdminApi=async(order) => {
    const response = await authAxios.post(`orders/admin`,order)
    return response.data
}

