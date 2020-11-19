import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1616",
});

export default api;
