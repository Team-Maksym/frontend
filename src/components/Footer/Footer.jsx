import { Typography, Container, Box, List, ListItem, ListItemIcon } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Instagram, LinkedIn, Facebook, YouTube } from '@mui/icons-material';
import CircleIcon from '@mui/icons-material/Circle';
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
        <Box
          sx={{
            display: { xs: 'flex', sm: 'grid' },
            flexDirection: 'column',
            gridTemplateColumns: { sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          }}
        >
          <Grid item xs={6} sm={3} key="footer title" sx={{ mt: 1 }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
              <Grid item sx={{ mb: '16px' }}>
                <LogoText />
              </Grid>
            </Grid>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1, mb: '12px', textAlign: 'center' }}>
              IWannaBeAStarLight
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            </Box>
          </Grid>
          {footers.map((footer) => (
            <Grid
              item
              key={footer.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',

                alignItems: 'center',
                mt: { xs: 3, sm: 1 },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ pl: '25px', color: 'neutral.white' }}>
                {footer.title}
              </Typography>
              <List>
                {footer.name.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon sx={{ minWidth: '20px' }}>
                      <CircleIcon sx={{ fontSize: 10, color: 'neutral.white' }} />
                    </ListItemIcon>
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
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
};
