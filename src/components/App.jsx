import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Header } from './Header';
import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Banner } from './Wrapper/components/Banner';
import { TalentList } from './TalentList';
import { PreLoader } from './PreLoader';
import { TalentContext } from '../shared/context/TalentContext';

export const App = () => {
  const [talent, setTalent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TalentContext.Provider value={{ talent, setTalent }}>
        <Box sx={{ backgroundColor: 'neutral.whiteGrey' }}>
          <CssBaseline />
          {loading ? (
            <PreLoader />
          ) : (
            <>
              <Header />
              <Banner />
              <Wrapper>
                <TalentList />
              </Wrapper>
              <Footer />
            </>
          )}
        </Box>
      </TalentContext.Provider>
    </ThemeProvider>
  );
};

