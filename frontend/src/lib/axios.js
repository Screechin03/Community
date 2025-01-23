import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://community-f9zq.vercel.app/api",
    withCredentials: true,
})
