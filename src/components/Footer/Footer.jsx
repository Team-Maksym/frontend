import { Typography, Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Instagram, LinkedIn, Facebook, YouTube } from '@mui/icons-material';
import { Copyright } from './components/Copyright';
import { LogoText } from '../Header/components/LogoText';

const footers = [
  {
    title: 'Back-End Devs',
    description: ['Dev name', 'Dev name', 'Dev name', 'Dev name'],
  },
  {
    title: 'Front-End Devs',
    description: ['Dev name', 'Dev name', 'Dev name', 'Dev name'],
  },
  {
    title: 'QA',
    description: ['QA name', 'QA name', 'QA name', 'QA name'],
  },
];

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
      <Container component="footer" sx={{ pt: '48px' }}>
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={6} sm={3} key="footer title">
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item sx={{ mb: '16px' }}>
                <LogoText />
              </Grid>
            </Grid>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, mb: '12px' }}>
              IWannaBeAStarLight
            </Typography>
            <Instagram fontSize="large" sx={{ mr: '8px' }} />
            <LinkedIn fontSize="large" sx={{ mr: '8px' }} />
            <Facebook fontSize="large" sx={{ mr: '8px' }} />
            <YouTube fontSize="large" sx={{ mr: '8px' }} />
          </Grid>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" gutterBottom sx={{ pl: '25px', color: 'secondary.main' }}>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" sx={{ color: 'secondary.main' }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
};
