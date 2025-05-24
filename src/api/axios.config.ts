import axios, { InternalAxiosRequestConfig } from "axios";

//TODO: rewrite axios config mapper
const deleteToken = () =>{
    localStorage.clear()
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVICE_API_TEST_DOMAIN,
  headers: {
    "Content-Type": "application/json",
    clientId: import.meta.env.VITE_SERVICE_APPLICATION_CLIENT_ID,
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  },
);

// DELETE EXPIRED TOKEN
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      deleteToken();
    }

    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      deleteToken();
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
