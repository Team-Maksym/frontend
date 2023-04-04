import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const LogoText = () => {
  return (
    <Typography
      variant="h4"
      sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, color: 'neutral.white', textDecoration: 'none' }}
      component={Link}
      to="/"
    >
      Star
      <Button disabled sx={{ bgcolor: 'secondary.main', ml: '5px', textTransform: 'none' }}>
        <Typography variant="h5" sx={{ color: 'primary.main' }}>
          Light
        </Typography>
      </Button>
    </Typography>
  );
};

