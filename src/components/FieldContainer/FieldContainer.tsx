import React from 'react';
import { BoxProps } from '@mui/material';
import Box from '../Box/Box';

const FieldContainer = (props: BoxProps) => {
  return (
    <Box
      {...props}
      width={['100%', '100%', 600]}
      style={{ ...props.style, justifyContent: 'center' }}
    >
      {props.children}
    </Box>
  );
};

export default FieldContainer;
