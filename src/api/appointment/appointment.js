import { myAxios } from "../base";

export const makeAppointmentApi=async(data) => {
    const response = await myAxios.post('appointment',data)
    return response.data
}