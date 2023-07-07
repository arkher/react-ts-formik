import { LinkProps } from '@mui/material';
import React from 'react';
import { StyledLink } from './styles';

const Link = (props: LinkProps) => {
  return <StyledLink {...props} />;
};

export default Link;
