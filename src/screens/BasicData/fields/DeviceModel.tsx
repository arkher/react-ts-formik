import { FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import React, { ReactNode, useEffect, useState } from 'react';
import { FieldContainer, Select } from '../../../components';
import { GetDeviceModelsService } from '../../../services';
import { IField } from './types';

interface IDeviceModel extends IField {
  brand?: string;
}
const DeviceModel = ({
  brand,
  values,
  errors,
  touched,
  onChange,
  onBlur,
}: IDeviceModel) => {
  const [options, setOptions] = useState<IDevice[]>([]);
  useEffect(() => {
    const getDeviceModels = async () => {
      try {
        const response: IDeviceModelsResponse =
          await GetDeviceModelsService.get({
            brand: values.deviceBrand,
          });

        if (response.isSuccess) {
          const deviceNames = response.data.sort(function (a, b) {
            const textA = a.commercialName.toUpperCase();
            const textB = b.commercialName.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });

          setOptions(deviceNames);
        }
      } catch (e) {
        console.error(e);
      }
    };
    if (brand) {
      getDeviceModels();
    }
  }, [brand]);

  return (
    <FieldContainer>
      <FormControl style={{ width: '100%' }}>
        <Select
          disabled={!brand}
          name="deviceModel"
          id="deviceModel"
          label="Classe profissional"
          value={values.deviceModel}
          error={errors.deviceModel && touched.deviceModel ? true : false}
          onChange={
            onChange as unknown as (
              event: SelectChangeEvent<unknown>,
              child: ReactNode
            ) => void
          }
          onBlur={onBlur}
          options={options.map((model) => ({
            label: model.commercialName,
            value: model.commercialCode,
          }))}
        />
        <FormHelperText
          style={{ marginLeft: 0 }}
          error={!!(errors.deviceModel && touched.deviceModel)}
        >
          {errors.deviceModel && touched.deviceModel
            ? errors.deviceModel
            : 'Selecione o modelo do aparelho utilizado como garantia.'}
        </FormHelperText>
      </FormControl>
    </FieldContainer>
  );
};

export default DeviceModel;
