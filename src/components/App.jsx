import * as React from 'react';
import { ScopedCssBaseline, Typography } from '@mui/material';
import { Header } from './Header';
import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Banner } from './Wrapper/components/Banner';

function App() {
  return (
    <>
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
    </>
  );
}

export { App };
