const baseURL = import.meta.env.VITE_SERVER_BASE_URL
import axios from "axios";
import store from "../redux/store";


export const myAxios = axios.create({
    baseURL: baseURL
})





// Create Axios instance
export const authAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
authAxios.interceptors.request.use(
  (config) => {
    // Try getting token from Redux store
    const state = store.getState();
    const tokenFromRedux = state?.auth?.token;

    // Or fallback to localStorage
    const tokenFromLocalStorage = localStorage.getItem("token");

    const token = tokenFromRedux || tokenFromLocalStorage;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Add response interceptor for token expiry or errors
myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Token may have expired.");
      // Optional: dispatch logout or redirect logic here
    }
    return Promise.reject(error);
  }
);
