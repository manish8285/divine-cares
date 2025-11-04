import { authAxios } from "../base"

export const getPrescriptionApi=async(viewToken)=>{
  const response = await authAxios.get(`prescriptions/view/${viewToken}`)
  return response.data
}

export const createPrescriptionApi=async(prescription)=>{
  const response = await authAxios.post(`prescriptions`,prescription)
  return response.data
}

export const searchPrescriptionsApi=async(filter)=>{
  const response = await authAxios.post(`prescriptions/search`,filter)
  return response.data
}
