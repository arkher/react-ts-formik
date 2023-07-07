import { InputBaseComponentProps } from '@mui/material';
import React, { ElementType } from 'react';
import MaskedInput from 'react-text-mask';
import { FieldContainer, TextField } from '../../../components';
import { IField } from './types';

const Cpf = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="cpf"
        id="cpf"
        placeholder="CPF"
        value={values.cpf}
        InputProps={{
          inputComponent:
            MaskedInput as unknown as ElementType<InputBaseComponentProps>,
          inputProps: {
            mask: [
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '.',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
            ],
          },
        }}
        helperText={errors.cpf && touched.cpf ? errors.cpf : 'Digite seu cpf.'}
        error={errors.cpf && touched.cpf ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default Cpf;
