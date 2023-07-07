import { Close } from '@mui/icons-material';
import { IconButton, Modal as MuiModal, ModalProps } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import Box from '../Box/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid grey',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  p: 4,
  color: 'black',
  minHeight: 400,
  maxHeight: '80%',
};

const Modal = (props: ModalProps) => {
  return (
    <MuiModal {...props}>
      <Box sx={style} width={['80%', '60%', 600]}>
        <>
          <IconButton
            style={{ position: 'absolute', top: -0, right: 0 }}
            onClick={props.onClose as MouseEventHandler<HTMLButtonElement>}
          >
            <Close />
          </IconButton>
          {props.children}
        </>
      </Box>
    </MuiModal>
  );
};

export default Modal;
