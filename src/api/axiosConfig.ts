import axios, { AxiosRequestConfig } from 'axios';

const DefaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const getAxiosInstance = (baseURL?: string, config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: baseURL || import.meta.env.BFF_API_URL,
    headers: {
      ...DefaultHeaders,
    },
    ...config,
  });
};

export default getAxiosInstance;
