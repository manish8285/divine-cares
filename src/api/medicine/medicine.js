import { myAxios } from "../base"

export const searchMedicineApi=async(query) => {
    const response = await myAxios.get(`medicine/search?query=${query}`)
    return response.data
}

export const getAllMedicineApi=async() => {
    const response = await myAxios.get(`medicine/`)
    return response.data
}