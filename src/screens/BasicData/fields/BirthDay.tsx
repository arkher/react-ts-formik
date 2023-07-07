import React from 'react';
import { FieldContainer, TextField } from '../../../components';
import { IField } from './types';

const BirthDay = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="birthDay"
        id="birthDay"
        placeholder="Data de nascimento"
        value={values.birthDay}
        type="date"
        helperText={
          errors.birthDay && touched.birthDay
            ? errors.birthDay
            : 'Digite sua data de nascimento'
        }
        error={errors.birthDay && touched.birthDay ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default BirthDay;
