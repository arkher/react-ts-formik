import React from 'react';
import { FieldContainer, TextField } from '../../../components';
import { IField } from './types';

const Email = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="email"
        id="email"
        placeholder="E-mail"
        value={values.email}
        type="email"
        helperText={
          errors.email && touched.email ? errors.email : 'Digite seu e-mail'
        }
        error={errors.email && touched.email ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default Email;
