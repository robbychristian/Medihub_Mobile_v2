import axios from "axios";

                              // IP           :port
// export const DEV_URL = "http://10.0.2.2:8000/api/";
export const DEV_URL = "http://192.168.254.190:8000/api/";
export const PROD_URL = "https://medihubqc.com/api/";

export const api = axios.create({
  baseURL: DEV_URL,
});
