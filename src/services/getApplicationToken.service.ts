import { requestApi } from '../api/request';
import { GetApplicationTokenEndpoint } from '../endpoints';
import { CLIENT_SECRET_SITE } from '../constants';

export const GetApplicationTokenService = {
  post: async () => {
    const result = await requestApi(
      GetApplicationTokenEndpoint.post({ secret: CLIENT_SECRET_SITE }),
      'api'
    );
    return result.data;
  },
};
