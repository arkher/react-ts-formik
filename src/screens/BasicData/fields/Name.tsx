import React from 'react';
import { FieldContainer, TextField } from '../../../components';
import { IField } from './types';

const Name = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="name"
        id="name"
        placeholder="Nome completo"
        value={values.name}
        type="text"
        helperText={
          errors.name && touched.name
            ? errors.name
            : 'Digite seu nome completo.'
        }
        error={errors.name && touched.name ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default Name;
