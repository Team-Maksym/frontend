import { Typography } from '@mui/material';
import { Container, Box } from '@mui/system';

export const ErrorPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        bgcolor: 'neutral.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '220px',
              textShadow: '2px 2px 0px #000, -2px -2px 0px #000',
              fontWeight: 700,
              lineHeight: '220px',
            }}
          >
            4
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '220px',
              color: 'secondary.main',
              textShadow: '2px 2px 0px #f39200, -2px -2px 0px #f39200',
              fontWeight: 700,
              lineHeight: '220px',
            }}
          >
            0
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: '220px',
              textShadow: '2px 2px 0px #000, -2px -2px 0px #000',
              fontWeight: 700,
              lineHeight: '220px',
            }}
          >
            4
          </Typography>
        </Container>
        <Container>
          <Typography variant="h6" sx={{ color: 'secondary.main', textAlign: 'center' }}>
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};
