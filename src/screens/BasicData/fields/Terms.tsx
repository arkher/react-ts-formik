import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FieldContainer,
  Link,
  Modal,
  PrivacyPolicy,
  TermsOfUse,
} from '../../../components';
import { IField } from './types';

const Terms = ({ values, errors, touched, onChange, onBlur }: IField) => {
  const [openModalTermsOfUse, setOpenModalTermsOfUse] = useState(false);
  const [openModalPrivacyPolicy, setOpenModalPrivacyPolicy] = useState(false);
  return (
    <FieldContainer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box>
        <Typography color="GrayText" variant="body2">
          Ao me cadastrar na Juvo estou ciente e concordo com os{' '}
          <Link
            onClick={() => {
              setOpenModalTermsOfUse(true);
            }}
            style={{ zIndex: 10 }}
          >
            Termos de uso
          </Link>{' '}
          e estou ciente que a Juvo irá tratar os meus dados pessoais nos termos
          da{' '}
          <Link
            onClick={() => {
              setOpenModalPrivacyPolicy(true);
            }}
            style={{ zIndex: 10 }}
          >
            Politica de Privacidade
          </Link>
          . No caso de contratação de empréstimo com garantia de dispositivo
          móvel, a Juvo poderá utilizar o serviço de geolocalização e bloqueio
          de uso do dispositivo, nos termos da Política de Privacidade citada.
          Declaro não ser uma pessoa politicamente exposta e autorizo a consulta
          e o compartilhamento com a Juvo de informações do SCR - Banco Central
          do Brasil e a consulta em bureaus de crédito, incluindo junto ao
          cadastro positivo e a outros fornecedores de dados de crédito e de
          prevenção a fraude e de enriquecimento de dados de contato conforme
          previstos da política de privacidade.
        </Typography>
      </Box>

      <Modal
        open={openModalTermsOfUse}
        onClose={() => setOpenModalTermsOfUse(false)}
      >
        <TermsOfUse />
      </Modal>
      <Modal
        open={openModalPrivacyPolicy}
        onClose={() => setOpenModalPrivacyPolicy(false)}
      >
        <PrivacyPolicy />
      </Modal>
    </FieldContainer>
  );
};

export default Terms;
