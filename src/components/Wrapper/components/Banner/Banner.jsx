import { Button, Container, Typography, Box, Card, CardContent, CardActionArea } from '@mui/material';
import { useContext } from 'react';
import { PersonContext } from '../../../../shared/context/PersonContext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Banner = () => {
  const { openAuthModal } = useContext(PersonContext);

  function scrollTo(id) {
    var element = document.querySelector(id);
    window.scroll({
      left: 0,
      top: element.offsetTop - 100,
      behavior: 'smooth',
    });
  }

  return (
    <Container
      disableGutters
      maxWidth="100vw"
      component="main"
      sx={{
        position: 'absolute',
        zIndex: '2',
        height: '100vh',
        // background: 'url(static/bg.png) no-repeat center',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Card sx={{ maxWidth: 750, bgcolor: 'rgba(34, 40, 49, 0.65)', backdropFilter: 'blur(5px)' }}>
        <CardActionArea sx={{ p: { xs: '10px', sm: '15px', md: '25px' } }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', m: { xs: '10px', sm: '15px', md: '30px' } }}>
              <Typography variant="h3" align="center" color="neutral.white" gutterBottom>
                Do you wanna be a StarLight?
              </Typography>
              <Button
                onClick={() => openAuthModal('signUp')}
                color={'secondary'}
                variant="contained"
                sx={{ p: { xs: '10px', sm: '15px', md: '20px' }, m: { xs: '0 auto', md: '0 50px' } }}
              >
                <Typography variant="h5"> SIGN UP</Typography>
              </Button>
            </Box>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}
            >
              <Typography align="center" color="neutral.white" sx={{ fontSize: 16 }}>
                Or scroll down to see other{' '}
                <Typography color="secondary.main" sx={{ display: 'inline', fontWeight: 'bold', fontSize: 16 }}>
                  talents
                </Typography>
              </Typography>
              <KeyboardArrowDownIcon
                onClick={() => scrollTo('#TalentList')}
                className="arrow-link"
                sx={{
                  color: 'neutral.white',
                  fontSize: 45,
                  mt: 2,
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};
