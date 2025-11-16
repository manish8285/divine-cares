import { myAxios } from "../base";

export const getDoctorsApi=async() => {
    const response = await myAxios.get('admin/doctors')
    return response.data
}