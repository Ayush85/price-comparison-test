import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://price-comparison-1.herokuapp.com/",
});
