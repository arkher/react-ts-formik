import { AxiosPromise, ResponseType } from 'axios';
import Storage from '../modules/Storage';
import getAxiosInstance from './axiosConfig';
import { httpMethod } from './core/http.core';

export type EndpointConfig = {
  method: httpMethod;
  path: string;
  data?: object;
  headers?: object;
  params?: object;
  responseType?: ResponseType;
};

export type APIType = 'bff' | 'api' | 'registration_bff';
interface IAPIUrl {
  [name: string]: string;
}

const APIUrl: IAPIUrl = {
  bff: import.meta.env.VITE_BFF_URL,
  registration_bff: import.meta.env.VITE_REGISTRATION_BFF_URL,
  api: import.meta.env.VITE_API_URL,
};

export const requestApi = async <T>(
  config: EndpointConfig,
  api: APIType = 'api'
): Promise<AxiosPromise<T>> => {
  const { data, path, headers, params, method, responseType } = config;

  return data
    ? getAxiosInstance(APIUrl[api])?.[method]<T>(path, data, {
        headers:
          api === 'bff' || api === 'registration_bff'
            ? {
                ...headers,
                Authorization: `Bearer ${Storage.get('token_site')}`,
              }
            : headers,
        params,
        responseType,
      })
    : getAxiosInstance(APIUrl[api])?.[method]<T>(path, {
        headers:
          api === 'bff' || api === 'registration_bff'
            ? {
                ...headers,
                Authorization: `Bearer ${Storage.get('token_site')}`,
              }
            : headers,
        params,
        responseType,
      });
};
