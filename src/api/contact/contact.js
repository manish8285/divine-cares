import { myAxios } from "../base";

export const contactApi=async(data) => {
    const response = await myAxios.post('contact',data)
    return response.data
}