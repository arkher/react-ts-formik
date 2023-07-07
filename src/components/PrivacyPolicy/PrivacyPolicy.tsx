import { Typography } from '@mui/material';
import React from 'react';
import { JUVOCREDITO_URL, PRIVACY_POLICY_VERSION } from '../../constants';

const PrivacyPolicy = () => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <Typography fontWeight={'bold'} variant="body2" fontFamily="sans-serif">
        POLÍTICA DE PRIVACIDADE
      </Typography>
      <br />
    </div>
  );
};

export default PrivacyPolicy;
