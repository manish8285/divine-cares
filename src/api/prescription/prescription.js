import { authAxios, authAxiosAdmin, myAxios } from "../base"

export const getPrescriptionApi=async(viewToken)=>{
  const response = await myAxios.get(`prescriptions/view/${viewToken}`)
  return response.data
}

export const getUserPrescriptionsApi=async()=>{
  const response = await authAxios.get(`prescriptions/user`)
  return response.data
}

// only admin can create prescription
export const createPrescriptionApi=async(prescription)=>{
  const response = await authAxiosAdmin.post(`prescriptions`,prescription)
  return response.data
}

export const searchPrescriptionsApi=async(filter)=>{
  const response = await authAxios.post(`prescriptions/search`,filter)
  return response.data
}
