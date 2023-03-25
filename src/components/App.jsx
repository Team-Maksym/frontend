import * as React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Header } from './Header';
import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Banner } from './Wrapper/components/Banner';
import { TalentList } from './TalentList';
import { GetAllUsers } from '../service';
import { useEffect, useState } from 'react';

export const App = () => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    GetAllUsers()
      .then((response) => {
        setTalents(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'neutral.whiteGrey' }}>
        <CssBaseline />
        <Header />
        <Banner />
        <Wrapper>{talents ? <TalentList data={talents} /> : null}</Wrapper>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
