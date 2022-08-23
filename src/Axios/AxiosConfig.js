import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: "https://api.bowled.io/",
});

export default AxiosConfig;
