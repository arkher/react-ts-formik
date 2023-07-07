import { MenuItem, SelectProps } from '@mui/material';
import React from 'react';
import { StyledSelect } from './styles';

interface ISelect extends SelectProps {
  options: IOption[];
}

const Select = ({ options, variant, ...props }: ISelect) => {
  return (
    <StyledSelect
      style={{ width: '100%' }}
      variant={variant || 'standard'}
      {...props}
    >
      {!options.length && (
        <MenuItem value="" disableRipple disabled>
          <em>Sem opções</em>
        </MenuItem>
      )}
      {options.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default Select;
