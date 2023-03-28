import React from 'react';
import { Box, keyframes } from '@mui/material';

export const PreLoader = () => {
  const spin = keyframes`
  0%,
  100% {
    transform: translate(0);
  }
  25% {
    transform: translate(160%);
  }
  50% {
    transform: translate(160%, 160%);
  }
  75% {
    transform: translate(0, 160%);
  }
`;
  return (
    <Box
      sx={{
        zIndex: 3,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'neutral.white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
        }}
      >
        <Box
          sx={{
            border: 0,
            margin: 0,
            width: '40%',
            height: '40%',
            position: 'absolute',
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            animation: `${spin} 2s ease infinite`,
            animationDelay: '-1.5s',
          }}
        ></Box>
        <Box
          sx={{
            border: 0,
            margin: 0,
            width: '40%',
            height: '40%',
            position: 'absolute',
            borderRadius: '50%',
            bgcolor: 'primary.main',
            animation: `${spin} 2s ease infinite`,
            animationDelay: '-1s',
          }}
        ></Box>
        <Box
          sx={{
            border: 0,
            margin: 0,
            width: '40%',
            height: '40%',
            position: 'absolute',
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            animation: `${spin} 2s ease infinite`,
            animationDelay: '-0.5s',
          }}
        ></Box>
        <Box
          sx={{
            border: 0,
            margin: 0,
            width: '40%',
            height: '40%',
            position: 'absolute',
            borderRadius: '50%',
            bgcolor: 'primary.main',
            animation: `${spin} 2s ease infinite`,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
