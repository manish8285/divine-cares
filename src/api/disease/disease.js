import { myAxios } from "../base"

export const getAllDiseaseApi=async() => {
    const response = await myAxios.get(`disease/`)
    return response.data
}