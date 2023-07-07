import { methods } from '../api/core/http.core';
import { EndpointConfig } from '../api/request';

export interface IRegisterBffEndpointPaload {
  full_name: string;
  email: string;
  address_postal_code: string;
  birthdate: string;
  cpf_number: string;
  gross_income: string;
  professional_class_id: number;
  marital_status_id: number;
  mobile_phone: string;
  device: {
    model: string;
    brand: string;
    brand_option: string;
    os_version: string;
  };
  terms: boolean;
  politically_exposed_person: boolean;
}
export const RegisterBffEndpoint = {
  post(data: IRegisterBffEndpointPaload, partner: string): EndpointConfig {
    return {
      method: methods.post,
      data,
      path: `/simulation/basic-data?partner=${partner}`,
    };
  },
};
