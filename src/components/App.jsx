import * as React from 'react';
import { Typography, ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { Header } from './Header';
import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Banner } from './Wrapper/components/Banner';

export const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <Wrapper>
          <Typography variant="h3" noWrap sx={{ flexGrow: 1 }}>
            Talent List
          </Typography>
        </Wrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};
