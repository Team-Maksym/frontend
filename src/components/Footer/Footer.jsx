import * as React from 'react';
import { Typography, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Copyright } from './components/Copyright';

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

function Footer() {
  return (
    <footer>
      <Container maxWidth="md" component="footer" sx={{ borderTop: '1px solid', mt: '64px', py: '48px' }}>
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item key="footer title">
            <Grid container direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item>
                <LogoDevIcon fontSize="large" sx={{ mr: '16px' }} />
              </Grid>
              <Grid item>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1, mb: '8px' }}>
                  StarLight
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, mb: '12px' }}>
              IWannaBeAStarLight
            </Typography>
            <InstagramIcon fontSize="large" sx={{ mr: '8px' }} />
            <LinkedInIcon fontSize="large" sx={{ mr: '8px' }} />
            <FacebookIcon fontSize="large" sx={{ mr: '8px' }} />
            <YouTubeIcon fontSize="large" sx={{ mr: '8px' }} />
          </Grid>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom sx={{ pl: '25px' }}>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
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
    </footer>
  );
}

export { Footer };
