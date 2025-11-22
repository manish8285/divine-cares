import { myAxios } from "../base"

// new address
export const createAddressApi=async(data) => {
    const response = await myAxios.post('address',data)
    return response.data
}

// new address
export const getAddressByIdApi=async(id) => {
    const response = await myAxios.post(`address/${id}`)
    return response.data
}

// get user/admin addresses

export const getMyAddressApi=async(filter) => {
    const response = await myAxios.post(`address/my`,filter)
    return response.data
}


