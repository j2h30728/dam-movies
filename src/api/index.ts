import axios from "axios";

import { ApiError } from "./customError";

const { VITE_API_KEY } = import.meta.env;

export const BASE_URL = "https://api.themoviedb.org/3/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${VITE_API_KEY}`,
    accept: "application/json",
  },
  timeout: 1000 * 5,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data.status_message || error.message;
      const status = error.response?.status || 500;
      const data = error.response?.data;
      return Promise.reject(new ApiError(message, status, data));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
