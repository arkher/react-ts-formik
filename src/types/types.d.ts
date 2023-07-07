interface IFormData {
  name: string;
  cpf: string;
  email: string;
  birthDay: string;
  cellPhone: string;
  grossIncome: string;
  professionalClassId: string;
  postalCode: string;
  deviceBrand: string;
  deviceModel: string;
  osVersion: string;
  terms: boolean;
  nonPoliticallyExposedPerson: boolean;
}

interface IDevice {
  commercialName: string;
  commercialCode: string;
}

interface IDeviceModelsResponse {
  data: IDevice[];
  isSuccess: boolean;
}

interface IDeviceFields {
  exists: boolean;
  brand?: string;
  model?: string;
  os?: string;
  osVersion?: string;
}

interface IDeviceInfoResponse {
  isSuccess: boolean;
  data: IDeviceFields;
}

interface IOption {
  value: number | string;
  label: string;
}
