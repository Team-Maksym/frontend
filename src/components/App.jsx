import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { Header } from './Header';
import { Router } from './Router';
import { Footer } from './Footer';
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <TalentContext.Provider value={{ talent, setTalent }}>
          <Box sx={{ backgroundColor: 'neutral.whiteGrey' }}>
            <CssBaseline />
            {loading ? (
              <PreLoader />
            ) : (
              <>
                <Header />
                <Router />
                <Footer />
              </>
            )}
          </Box>
        </TalentContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

