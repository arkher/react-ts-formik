import { Select, styled } from '@mui/material';

export const StyledSelect = styled(Select)({
  border: 'none',
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      border: '2px solid grey',
    },
  },
  '&:not(.Mui-disabled):hover::before': {
    borderBottom: '2px solid grey',
  },
});
