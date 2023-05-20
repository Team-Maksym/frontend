import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Header } from './Header';
import { Router } from './Router';
import { Footer } from './Footer';
import { AuthProvider } from './Authorization/components/AuthProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Box sx={{ backgroundColor: 'neutral.whiteGrey' }}>
            <CssBaseline />
            <Header />
            <Router />
            <Footer />
          </Box>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
