import { AccordionDetails, Box, Button, Link, Typography } from '@mui/material';
export const ProofDescription = ({ description, link }) => {
  return (
    <AccordionDetails sx={{ bgcolor: 'primary.main', color: 'neutral.white', borderTop: 1, overflow: 'hidden' }}>
      <Typography>{description}</Typography>
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
