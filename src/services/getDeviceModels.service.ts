import { requestApi } from '../api/request';
import { GetDeviceModelsEndpoint } from '../endpoints';

export interface IGetDeviceModelsParams {
  brand: string;
}
export const GetDeviceModelsService = {
  get: async ({ brand }: IGetDeviceModelsParams) => {
    const result = await requestApi<IDeviceModelsResponse>(
      GetDeviceModelsEndpoint.get({ brand }),
      'registration_bff'
    );
    return result.data;
  },
};
