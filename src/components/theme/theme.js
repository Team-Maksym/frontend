import { createTheme } from '@mui/material';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#222831',
    },
    secondary: {
      main: '#ff5722',
    },
    neutral: {
      white: '#f5f0e8',
      // lightGrey: '#393e46',
      whiteGrey: '#393e46',
      // grey: '#6B6C6F',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: 64,
      fontWeight: 800,
      lineHeight: '96px',
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '58px',
    },
    h3: {
      fontSize: 36,
      fontWeight: 700,
      lineHeight: '44px',
    },
    h4: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: '28px',
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '24px',
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '18px',
    },
  },
});

