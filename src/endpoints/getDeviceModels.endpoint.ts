import { methods } from '../api/core/http.core';
import { EndpointConfig } from '../api/request';

export interface IGetDeviceModelsParams {
  brand: string;
}
export const GetDeviceModelsEndpoint = {
  get({ brand }: IGetDeviceModelsParams): EndpointConfig {
    return {
      method: methods.get,
      path: `/device/models/${brand}`,
    };
  },
};
