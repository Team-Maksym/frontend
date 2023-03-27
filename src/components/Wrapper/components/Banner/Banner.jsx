import { Container, Typography } from '@mui/material';

// export const Banner = () => {
//   return (
//     <Container disableGutters maxWidth="lg" component="main" sx={{ height: '90vh', bgcolor: 'neutral.whiteGrey' }}>
//       <Typography variant="h1" align="center" color="text.primary" gutterBottom sx={{ py: '30vh' }}>
//         WELCOME
//       </Typography>
//     </Container>
//   );
// };

export const Banner = () => {
  return (
    <Container
      disableGutters
      maxWidth="100vw"
      component="main"
      sx={{ height: '85vh', background: 'url(static/bg.png) no-repeat center', backgroundSize: 'cover' }}
    >
      <Typography variant="h1" align="center" color="text.primary" gutterBottom sx={{ py: '30vh' }}>
        WELCOME
      </Typography>
    </Container>
  );
};

