import { myAxios } from "../base";

export const bookTestApi=async(data) => {
    const response = await myAxios.post('tests',data)
    return response.data
}