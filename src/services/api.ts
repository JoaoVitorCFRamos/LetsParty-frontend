import axios, { AxiosError } from "axios";

export const apiUrl = "https://lets-party-api-development.herokuapp.com";

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("@LPAuth:token");
      api.defaults.headers.common.Authorization = "";
    }

    return Promise.reject(error);
  }
);

export default api;
