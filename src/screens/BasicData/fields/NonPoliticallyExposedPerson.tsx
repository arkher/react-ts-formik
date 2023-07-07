import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material';
import React from 'react';
import { Box, Checkbox, FieldContainer } from '../../../components';
import { IField } from './types';

const NonPoliticallyExposedPerson = ({
  values,
  errors,
  touched,
  onChange,
  onBlur,
}: IField) => {
  return (
    <FieldContainer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
      }}
    >
      <FormControl
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>
          <FormControlLabel
            control={<Checkbox checked={values.nonPoliticallyExposedPerson} />}
            name="nonPoliticallyExposedPerson"
            label=""
            onChange={onChange}
            onBlur={onBlur}
          />
          <Typography color="GrayText" variant="body2">
            Declaro não ser uma pessoa politicamente exposta e autorizo a
            consulta e o compartilhamento com a Juvo de informações do SCR -
            Banco Central do Brasil e a consulta em bureaus de crédito,
            incluindo junto ao cadastro positivo.
          </Typography>
        </Box>

        <FormHelperText
          style={{ marginLeft: 38 }}
          error={
            !!(
              errors.nonPoliticallyExposedPerson &&
              touched.nonPoliticallyExposedPerson
            )
          }
        >
          {errors.nonPoliticallyExposedPerson &&
            touched.nonPoliticallyExposedPerson &&
            errors.nonPoliticallyExposedPerson}
        </FormHelperText>
      </FormControl>
    </FieldContainer>
  );
};

export default NonPoliticallyExposedPerson;
