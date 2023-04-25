import { AccordionDetails, Box, Button, Link, Typography } from '@mui/material';
export const ProofDescription = ({ description, link }) => {
  const addSpace = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (i % 85 === 0 && i !== 0) {
        result += ' ';
      }
      result += str[i];
    }
    return result;
  };

  description = description.split(' ');

  for (let i = 0; i < description.length; i++) {
    if (description[i].length > 85) {
      description[i] = addSpace(description[i]);
    }
  }
  return (
    <AccordionDetails sx={{ bgcolor: 'primary.main', color: 'neutral.white', borderTop: 1, overflow: 'hidden' }}>
      <Typography>{description.join(' ')}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'left', mt: '15px' }}>
        {link && (
          <Button variant="contained" sx={{ bgcolor: 'secondary.main' }}>
            <Link
              sx={{
                color: 'neutral.white',
                transition: '.2s ease',
                textDecoration: 'none',
                fontSize: '0.875rem',
                ':hover': {
                  color: 'neutral.white',
                },
              }}
              href={link}
            >
              Link
            </Link>
          </Button>
        )}
      </Box>
    </AccordionDetails>
  );
};
