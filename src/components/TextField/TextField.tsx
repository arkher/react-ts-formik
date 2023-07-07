import React from 'react';
import { TextFieldProps } from '@mui/material';
import { StyledTxtField } from './styles';

const TextField = ({ label, variant, ...rest }: TextFieldProps) => {
  return (
    <StyledTxtField
      style={{ width: '100%' }}
      label={label}
      variant={variant || 'standard'}
      {...rest}
    />
  );
};

export default TextField;
