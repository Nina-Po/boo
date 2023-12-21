import axios from "axios";
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from "./localStorage";

const { REACT_APP_URL_API } = process.env;

const customFetch = axios.create({
  // baseURL: "http://localhost:1000/api/",
  baseURL: `http://localhost:1000/api/`,
});

customFetch.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default customFetch;
