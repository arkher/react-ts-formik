import { InputBaseComponentProps } from '@mui/material';
import React, { ElementType } from 'react';
import NumberFormat from 'react-number-format';
import { FieldContainer, TextField } from '../../../components';
import { currencyFormatter } from '../../../utils/formatters/currencyFormatter';
import { IField } from './types';

const GrossIncome = ({ values, errors, touched, onChange, onBlur }: IField) => {
  return (
    <FieldContainer>
      <TextField
        name="grossIncome"
        id="grossIncome"
        placeholder="Valor da renda bruta mensal"
        value={values.grossIncome}
        InputProps={{
          inputComponent:
            NumberFormat as unknown as ElementType<InputBaseComponentProps>,
          inputProps: {
            format: currencyFormatter,
          },
        }}
        helperText={
          errors.grossIncome && touched.grossIncome
            ? errors.grossIncome
            : 'Digite o valor da renda bruta mensal (R$)'
        }
        error={errors.grossIncome && touched.grossIncome ? true : false}
        onChange={onChange}
        onBlur={onBlur}
      />
    </FieldContainer>
  );
};

export default GrossIncome;
