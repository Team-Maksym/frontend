import { Typography, Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Instagram, LinkedIn, Facebook, YouTube } from '@mui/icons-material';
import { Copyright } from './components/Copyright';
import { LogoText } from '../Header/components/LogoText';

const footers = [
  {
    title: 'Back-End Devs',
    name: ['Kateryna Stetsenko', 'Oleksandr Volyk', 'Serhii Kushnerov'],
    nickname: ['KateySt', 'tetyaZyna', 'Lion6477'],
  },
  {
    title: 'Front-End Devs',
    name: ['Kateryna Podus', 'Anna Sukharieva', 'Danylo Shyrai', 'Mykola Hahenko'],
    nickname: ['kpodus', 'AnnaSukharieva', 'ShirayDan', 'Scaliariy'],
  },
  {
    title: 'QA',
    name: ['Andrii Omelnytskyi', 'Kyrylo Lobanov', 'Roman Pevitskyi'],
    nickname: ['Omelnytskyi', 'Sakolaka', 'roman20in'],
  },
];

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'neutral.white' }}>
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
            <Instagram
              fontSize="large"
              sx={{
                mr: '8px',
                transition: '.2s ease',
                ':hover': {
                  color: 'secondary.main',
                },
              }}
            />
            <LinkedIn
              fontSize="large"
              sx={{
                mr: '8px',
                transition: '.2s ease',
                ':hover': {
                  color: 'secondary.main',
                },
              }}
            />
            <Facebook
              fontSize="large"
              sx={{
                mr: '8px',
                transition: '.2s ease',
                ':hover': {
                  color: 'secondary.main',
                },
              }}
            />
            <YouTube
              fontSize="large"
              sx={{
                mr: '8px',
                transition: '.2s ease',
                ':hover': {
                  color: 'secondary.main',
                },
              }}
            />
          </Grid>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" gutterBottom sx={{ pl: '25px', color: 'neutral.white' }}>
                {footer.title}
              </Typography>
              <ul>
                {footer.name.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={'https://github.com/' + footer.nickname[i]}
                      variant="subtitle1"
                      sx={{
                        color: 'neutral.white',
                        transition: '.2s ease',
                        textDecoration: 'none',
                        ':hover': {
                          color: 'secondary.main',
                        },
                      }}
                    >
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
