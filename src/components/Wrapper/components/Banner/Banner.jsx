import { Button, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import { TalentContext } from '../../../../shared/context/TalentContext';

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
  const { openAuthModal } = useContext(TalentContext);
  return (
    <Container
      disableGutters
      maxWidth="100vw"
      component="main"
      sx={{
        height: '100vh',
        background: 'url(static/bg2.png) no-repeat center',
        // backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Card sx={{ maxWidth: 750, bgcolor: 'rgba(34, 40, 49, 0.65)', backdropFilter: 'blur(5px)' }}>
        <CardActionArea sx={{ p: '25px' }}>
          <CardContent>
            <Typography variant="h2" align="center" color="neutral.white" gutterBottom sx={{ fontWeight: 'bold' }}>
              WELCOME!
            </Typography>
            <Typography lign="center" fontSize={18} color="neutral.white">
              <Typography color="secondary.main" sx={{ display: 'inline', fontWeight: 'bold', fontSize: 18 }}>
                Starlight
              </Typography>{' '}
              is a slightly memetic name that indicates people’s desire{' '}
              <Typography color="secondary.main" sx={{ display: 'inline', fontWeight: 'bold', fontSize: 18 }}>
                to stand out in society
              </Typography>
              . There is a reference to the heroine of the series “The Boys” Starlight (She is a superhuman with
              superpowers), her ability is{' '}
              <Typography color="secondary.main" sx={{ display: 'inline', fontWeight: 'bold', fontSize: 18 }}>
                to excite energy
              </Typography>{' '}
              around her and{' '}
              <Typography color="secondary.main" sx={{ display: 'inline', fontWeight: 'bold', fontSize: 18 }}>
                reproduce the glow
              </Typography>{' '}
              that blinds with its purity.
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '30px' }}>
              <Typography variant="h3" align="center" color="neutral.white" gutterBottom>
                Do you wanna be a StarLight?
              </Typography>
              <Button
                onClick={() => openAuthModal('signUp')}
                color={'secondary'}
                variant="contained"
                sx={{ p: '20px', m: '0 50px' }}
              >
                <Typography variant="h5"> SIGN UP</Typography>
              </Button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
