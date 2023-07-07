import { Typography } from '@mui/material';
import React from 'react';

const TermsOfUse = () => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <Typography fontWeight={'bold'} variant="body2" fontFamily="sans-serif">
        TERMOS DE USO DA PLATAFORMA
      </Typography>
      <br />
      <Typography variant="body2">
        Estes termos de uso {'("Termos de Uso")'} regulam o seu uso e acesso à
        plataforma (“Plataforma”).
        <br />
      </Typography>
      
    </div>
  );
};

export default TermsOfUse;
