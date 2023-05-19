import { useState, useEffect } from 'react';
import { PreLoader } from '../../../PreLoader';
import { Typography, Box } from '@mui/material';

export const TimerComponent = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showText ? (
        <PreLoader />
      ) : (
        <Box
          sx={{
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h5" sx={{ color: 'neutral.white', textAlign: 'center', mt: 3 }}>
            Nothing was found
          </Typography>
        </Box>
      )}
    </>
  );
};
