import { CheckboxProps } from '@mui/material';
import React from 'react';
import { StyledCheckbox } from './styles';

const Checkbox = (props: CheckboxProps) => {
  return <StyledCheckbox size="small" {...props} />;
};

export default Checkbox;
