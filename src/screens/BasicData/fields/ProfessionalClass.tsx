import { FormControl, FormHelperText, SelectChangeEvent } from '@mui/material';
import React, { ReactNode } from 'react';
import { FieldContainer, Select } from '../../../components';
import { ENTERPRISE_CLASS } from '../../../constants';
import { IField } from './types';

const ProfessionalClass = ({
  values,
  errors,
  touched,
  onChange,
  onBlur,
}: IField) => {
  return (
    <FieldContainer>
      <FormControl style={{ width: '100%' }}>
        <Select
          name="professionalClassId"
          id="professionalClassId"
          label="Classe profissional"
          value={values.professionalClassId}
          error={
            errors.professionalClassId && touched.professionalClassId
              ? true
              : false
          }
          onChange={
            onChange as unknown as (
              event: SelectChangeEvent<unknown>,
              child: ReactNode
            ) => void
          }
          onBlur={onBlur}
          options={Object.entries(ENTERPRISE_CLASS).map(([key, value]) => ({
            value: key,
            label: value,
          }))}
        />
        <FormHelperText
          style={{ marginLeft: 0 }}
          error={!!(errors.professionalClassId && touched.professionalClassId)}
        >
          {errors.professionalClassId && touched.professionalClassId
            ? errors.professionalClassId
            : 'Selecione uma classe profissional.'}
        </FormHelperText>
      </FormControl>
    </FieldContainer>
  );
};

export default ProfessionalClass;
