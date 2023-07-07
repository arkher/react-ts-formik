import { requestApi } from '../api/request';
import { GetDeviceInfoEndpoint } from '../endpoints';

export const GetDeviceInfoService = {
  get: async () => {
    const result = await requestApi<IDeviceInfoResponse>(
      GetDeviceInfoEndpoint.get(),
      'registration_bff'
    );
    return result.data;
  },
};
