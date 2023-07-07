import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}));
