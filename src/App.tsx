import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BasicData } from './screens';
import ApplicationProvider from './contexts/application.context';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#DD3E84',
        light: '#e15390',
        dark: '#453144',
      },
      secondary: {
        main: '#00B7B6',
        light: '#39bebd',
        dark: '#26363e',
      },
    },
    typography: {
      fontFamily: ['museo-sans'].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <ApplicationProvider>
        <BasicData />
      </ApplicationProvider>
    </ThemeProvider>
  );
}

export default App;
