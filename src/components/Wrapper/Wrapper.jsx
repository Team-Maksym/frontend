import { Grid, Container } from '@mui/material';

export const Wrapper = (props) => {
  return (
    <Container disableGutters component="main" sx={{ py: '48px' }}>
      {props.children}
    </Container>
  );
};
