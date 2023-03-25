import * as React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Header } from './Header';
import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Banner } from './Wrapper/components/Banner';
import { TalentList } from './TalentList';

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'neutral.whiteGrey' }}>
        <CssBaseline />
        <Header />
        <Banner />
        <Wrapper><TalentList /></Wrapper>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
