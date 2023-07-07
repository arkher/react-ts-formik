import { InputBaseComponentProps } from '@mui/material';
import React, { ElementType } from 'react';
import MaskedInput from 'react-text-mask';
import { FieldContainer, TextField } from '../../../components';
import { IField } from './types';

const CellPhone = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="cellPhone"
        id="cellPhone"
        placeholder="Telefone celular"
        value={values.cellPhone}
        InputProps={{
          inputComponent:
            MaskedInput as unknown as ElementType<InputBaseComponentProps>,
          inputProps: {
            mask: [
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ],
          },
        }}
        helperText={
          errors.cellPhone && touched.cellPhone
            ? errors.cellPhone
            : 'Digite seu número de telefone.'
        }
        error={errors.cellPhone && touched.cellPhone ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default CellPhone;
