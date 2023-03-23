import * as React from 'react';
import { theme } from './theme/theme';
import { ScopedCssBaseline, Typography, ThemeProvider } from '@mui/material';
import { Header } from './Header';
import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Banner } from './Wrapper/components/Banner';

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
          <Header />
          <Banner />
          <Wrapper>
            <Typography variant="h3" noWrap sx={{ flexGrow: 1 }}>
              Talent List
            </Typography>
          </Wrapper>
          <Footer />
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  );
};
