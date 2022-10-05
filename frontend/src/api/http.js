import baseAxios from "axios";
import { getToken } from "./JWT";

const auth_axios = baseAxios.create({
  baseURL: "https://j7e202.p.ssafy.io:8081/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

const axios = baseAxios.create({
  baseURL: "https://j7e202.p.ssafy.io:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});
// axios.interceptors.request.use((config) => {
// config.headers["access-Token"] = `${getToken()}`;
//   return config;
// });

const http = {
  auth_axios,
  axios,
};

export default http;
