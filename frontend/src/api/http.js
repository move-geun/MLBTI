import baseAxios from "axios";
// import { getToken } from "./JWT";

const axios = baseAxios.create({
  baseURL: "http://j7e202.p.ssafy.io:8081/api",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${getToken()}`,
  },
});
// axios.interceptors.request.use((config) => {
// config.headers["access-Token"] = `${getToken()}`;
//   return config;
// });
export default axios;
