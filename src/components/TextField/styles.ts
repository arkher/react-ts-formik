import { styled, TextField } from '@mui/material';

export const StyledTxtField = styled(TextField)({
  border: 'none',
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      border: '2px solid grey',
    },
  },
  '& .MuiInput-underline': {
    '&:hover:not(.Mui-disabled, .Mui-error)': {
      ':before': {
        borderBottom: '2px solid grey',
      },
    },
  },
});
