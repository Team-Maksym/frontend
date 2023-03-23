import { Grid, Container } from '@mui/material';

export const Wrapper = (props) => {
  return (
    <Container disableGutters maxWidth="lg" component="main" sx={{ bgcolor: 'neutral.whiteGrey', py: '48px' }}>
      <Grid container justifyContent="space-evenly">
        <Grid item>{props.children}</Grid>
      </Grid>
    </Container>
  );
};
