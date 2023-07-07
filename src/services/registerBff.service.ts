import { ApiDefaultesponse } from '../api/core/http.core';
import { requestApi } from '../api/request';
import { RegisterBffEndpoint } from '../endpoints';
import { IRegisterBffEndpointPaload } from '../endpoints/registerBff.endpoint';

export const RegisterBffService = {
  post: async (data: IFormData, partner: string) => {
    const payload: IRegisterBffEndpointPaload = {
      full_name: data.name,
      cpf_number: data.cpf.replace(/\D/g, ''),
      email: data.email,
      address_postal_code: data.postalCode.replace(/\D/g, ''),
      birthdate: data.birthDay,
      gross_income: data.grossIncome.replaceAll('.', '').replace(',', '.'),
      mobile_phone: data.cellPhone.replace(/\D/g, ''),
      professional_class_id: parseInt(data.professionalClassId, 10),
      device: {
        brand: data.deviceBrand,
        brand_option: data.deviceBrand,
        model: data.deviceModel,
        os_version: data.osVersion,
      },
      terms: data.terms,
      politically_exposed_person: data.nonPoliticallyExposedPerson,
      marital_status_id: 1,
    };

    const result = await requestApi<ApiDefaultesponse>(
      RegisterBffEndpoint.post(payload, partner),
      'bff'
    );
    return result.data;
  },
};
