import { Grid } from '@mui/material';

function Wrapper({ children }) {
  return (
    <Grid container justifyContent="space-evenly">
      <Grid item>{children}</Grid>
    </Grid>
  );
}

export { Wrapper };
