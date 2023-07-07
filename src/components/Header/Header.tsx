import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import Box from '../Box/Box';
import { ReactComponent as Logo } from '../../assets/logo-branca.svg';

const Header = () => {
  const theme = useTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box style={{ backgroundColor: theme.palette.primary.main }}>
      {isMdBreakpoint && (
        <Box style={{ position: 'absolute', left: 16 }}>
          <Logo height={100} width={100} />
        </Box>
      )}
      <Typography fontSize={'2.5rem'} color={'white'}>
        Dados pessoais
      </Typography>
    </Box>
  );
};

export default Header;
