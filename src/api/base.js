const { default: axios } = require("axios");
const baseURL = import.meta.env.VITE_SERVER_BASE_URL
export const myAxios = axios.create({
    baseURL: baseURL
})