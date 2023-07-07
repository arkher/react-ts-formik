import { ButtonProps } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { StyledButton } from './styles';

interface IButton extends ButtonProps {
  isLoading?: boolean;
  loadingText?: string;
}
const Button = ({
  variant,
  isLoading,
  loadingText,
  disabled,
  ...props
}: IButton) => {
  return (
    <StyledButton
      variant={variant || 'contained'}
      {...props}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <>
          {loadingText || 'Processando...'}
          <CircularProgress
            size={16}
            style={{ marginLeft: 8, color: 'white' }}
          />
        </>
      ) : (
        props.children
      )}
    </StyledButton>
  );
};

export default Button;
