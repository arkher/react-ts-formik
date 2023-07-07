import { methods } from '../api/core/http.core';
import { EndpointConfig } from '../api/request';

export const GetDeviceInfoEndpoint = {
  get(): EndpointConfig {
    return {
      method: methods.get,
      path: `/device/info`,
    };
  },
};
