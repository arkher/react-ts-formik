import * as React from 'react';
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { Alert } from '@mui/material';

interface ISnackbar extends SnackbarProps {
  severity: 'error' | 'warning' | 'success';
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function TransitionsSnackbar({ message, ...props }: ISnackbar) {
  return (
    <div>
      <Snackbar TransitionComponent={SlideTransition} {...props}>
        <Alert severity={props.severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
}
