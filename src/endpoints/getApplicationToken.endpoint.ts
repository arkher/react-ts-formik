import { methods } from '../api/core/http.core';
import { EndpointConfig } from '../api/request';

interface IGetBffToken {
  secret: string;
}
export const GetApplicationTokenEndpoint = {
  post({ secret }: IGetBffToken): EndpointConfig {
    return {
      method: methods.post,
      path: 'api/oauth/api/token',
      data: {
        secret,
      },
    };
  },
};
