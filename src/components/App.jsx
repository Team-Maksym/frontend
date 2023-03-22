import React from 'react';
import { Button, Typography } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Button sx={{ background: 'primary.main' }} variant="contained">
        Button 2
      </Button>
      <Typography sx={{ color: 'primary.main' }} variant="h1">
        Aboba
      </Typography>
      <Typography sx={{ color: 'secondary.main' }} variant="h2">
        Aboba
      </Typography>
      <Typography sx={{ color: 'neutral.white' }} variant="h3">
        Aboba
      </Typography>
      <Typography sx={{ color: 'neutral.lightGrey' }} variant="h4">
        Aboba
      </Typography>
      <Typography sx={{ color: 'neutral.grey' }} variant="h5">
        Aboba
      </Typography>
      <Typography sx={{ color: 'primary.main' }} variant="h6">
        Aboba
      </Typography>
      <Typography sx={{ color: 'primary.main' }} variant="subtitle1">
        Aboba
      </Typography>
    </div>
  );
}

export default App;
