import { InputBaseComponentProps } from '@mui/material';
import React, { ElementType } from 'react';
import MaskedInput from 'react-text-mask';
import { FieldContainer, TextField } from '../../../components';
import { IField } from './types';

const PostalCode = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="postalCode"
        id="postalCode"
        placeholder="CEP"
        value={values.postalCode}
        InputProps={{
          inputComponent:
            MaskedInput as unknown as ElementType<InputBaseComponentProps>,
          inputProps: {
            mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
          },
        }}
        helperText={
          errors.postalCode && touched.postalCode
            ? errors.postalCode
            : 'Digite seu cep.'
        }
        error={errors.postalCode && touched.postalCode ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default PostalCode;
