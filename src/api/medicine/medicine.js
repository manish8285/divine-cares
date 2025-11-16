import { authAxiosAdmin } from "../base"

export const searchMedicineApi=async(query) => {
    const response = await authAxiosAdmin.get(`medicine/search?query=${query}`)
    return response.data
}

export const getAllMedicineApi=async() => {
    const response = await authAxiosAdmin.get(`medicine/`)
    return response.data
}