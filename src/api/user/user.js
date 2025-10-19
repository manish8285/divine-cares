import { authAxios } from "../base"

export const getMe=async()=>{
  const response = await authAxios.get("user/me")
  return response.data
}