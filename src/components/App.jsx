import React from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme/theme';
export const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};
