import axios from "axios";
import { Endpoint } from "../constants/enums";

const instance = axios.create({
  baseURL: Endpoint.USERMANAGEMENT,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    responseType: "stream",
  },
  timeout: 10000,
});

export default instance;
