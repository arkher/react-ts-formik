import { FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import React, { ReactNode, useEffect, useState } from 'react';
import { FieldContainer, Select } from '../../../components';
import { OS_VERSION, IOS_VERSION } from '../../../constants';
import { IField } from './types';

interface IDeviceModel extends IField {
  brand?: string;
}
const OsVersion = ({
  brand,
  values,
  errors,
  touched,
  onChange,
  onBlur,
}: IDeviceModel) => {
  const [options, setOptions] = useState<IOption[]>([]);
  useEffect(() => {
    if (brand) {
      if (brand === 'Apple') {
        setOptions(
          Object.entries(IOS_VERSION)
            .map(([key, value]) => ({
              value: key,
              label: value,
            }))
            .reverse()
        );
      } else {
        setOptions(
          Object.entries(OS_VERSION)
            .map(([key, value]) => ({
              value: key,
              label: value,
            }))
            .reverse()
        );
      }
    }
  }, [brand]);

  return (
    <FieldContainer>
      <FormControl style={{ width: '100%' }}>
        <Select
          disabled={!brand}
          name="osVersion"
          id="osVersion"
          label="Versão do sistema operacional"
          value={values.osVersion}
          error={errors.osVersion && touched.osVersion ? true : false}
          onChange={
            onChange as unknown as (
              event: SelectChangeEvent<unknown>,
              child: ReactNode
            ) => void
          }
          onBlur={onBlur}
          options={options}
        />
        <FormHelperText
          style={{ marginLeft: 0 }}
          error={!!(errors.osVersion && touched.osVersion)}
        >
          {errors.osVersion && touched.osVersion
            ? errors.osVersion
            : 'Selecione a versão do sistema operacional.'}
        </FormHelperText>
      </FormControl>
    </FieldContainer>
  );
};

export default OsVersion;
