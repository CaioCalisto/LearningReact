import axios, { AxiosResponse } from "axios";

import { camelizeKeys } from "humps";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.response.use((response: AxiosResponse) => {
  if (response.data) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});

export default api;
