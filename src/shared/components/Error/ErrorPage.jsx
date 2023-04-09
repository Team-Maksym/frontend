import { Typography } from '@mui/material';
import { Container, Box } from '@mui/system';

const defaultMessage =
  'The page you are looking for might have been removed had its name changed or is temporarily unavailable.';

export const ErrorPage = ({ status = '404', message = defaultMessage }) => {
  const blackStyle = {
    fontSize: '220px',
    textShadow: '2px 2px 0px #000, -2px -2px 0px #000',
    fontWeight: 700,
    lineHeight: '220px',
  };

  const orangeStyle = {
    fontSize: '220px',
    color: 'secondary.main',
    textShadow: '2px 2px 0px #f39200, -2px -2px 0px #f39200',
    fontWeight: 700,
    lineHeight: '220px',
  };

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
          {Array.from(String(status)).map((item, index) => {
            return (
              <Typography key={index} variant="h1" sx={index !== 1 ? blackStyle : orangeStyle}>
                {item}
              </Typography>
            );
          })}
        </Container>
        <Container>
          <Typography variant="h6" sx={{ color: 'secondary.main', textAlign: 'center' }}>
            {message}
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};

