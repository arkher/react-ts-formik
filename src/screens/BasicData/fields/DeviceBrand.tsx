import { FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import React, { ChangeEvent, ReactNode } from 'react';
import { FieldContainer, Select } from '../../../components';
import { MOBILE_BRAND } from '../../../constants';
import { IField } from './types';

const DeviceBrand = ({
  values,
  errors,
  touched,
  onChange,
  onBlur,
  setFieldValue,
}: IField) => {
  return (
    <FieldContainer>
      <FormControl style={{ width: '100%' }}>
        <Select
          name="deviceBrand"
          id="deviceBrand"
          placeholder="Marca do aparelho celular utilizado como garantia"
          value={values.deviceBrand}
          error={errors.deviceBrand && touched.deviceBrand ? true : false}
          onChange={(e) => {
            onChange(e as unknown as ChangeEvent<object>);
            setFieldValue?.('deviceModel', '');
            setFieldValue?.('osVersion', '');
          }}
          onBlur={onBlur}
          options={Object.entries(MOBILE_BRAND).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
        />
        <FormHelperText
          style={{ marginLeft: 0 }}
          error={!!(errors.deviceBrand && touched.deviceBrand)}
        >
          {errors.deviceBrand && touched.deviceBrand
            ? errors.deviceBrand
            : 'Selecione a marca do aparelho utilizado como garantia.'}
        </FormHelperText>
      </FormControl>
    </FieldContainer>
  );
};

export default DeviceBrand;
