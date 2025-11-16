import { authAxios, authAxiosAdmin, myAxios } from "../base";

export const makeAppointmentApi=async(data) => {
    const response = await myAxios.post('appointment',data)
    return response.data
}
// new authenticated api to book appointment
export const bookAppointmentApi=async(data) => {
    const response = await authAxios.post('appointment/book',data)
    return response.data
}

export const getAppointmentsByDoctorApi=async() => {
    const response = await authAxiosAdmin.get('appointment/doctor')
    return response.data
}

export const getAppointmentsByUserApi=async() => {
    const response = await authAxios.get('appointment/user')
    return response.data
}

export const getAllAppointmentsApi=async() => {
    const response = await authAxiosAdmin.get('appointment/all')
    return response.data
}

