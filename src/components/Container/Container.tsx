import React from 'react';
import { BoxProps } from '@mui/material';
import { StyledContainer } from './styles';

const Container = (props: BoxProps) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
