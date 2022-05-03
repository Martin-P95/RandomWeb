import axios from "axios";
import Cookies from "js-cookie";

let axiosOptions = {
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "",
  },
};

if (Cookies.get("token")) {
  axiosOptions.headers.Authorization = `Bearer ${Cookies.get("token")}`;
}

const instance = axios.create(axiosOptions);

export default instance;
