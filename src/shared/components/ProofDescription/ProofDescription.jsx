import { AccordionDetails, Box, Button, Link, Typography } from '@mui/material';
export const ProofDescription = () => {
  const defaultText =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda at temporibus dolorum. Itaque magnam nostrum explicabo incidunt obcaecati, dolore labore nobis laborum error dicta veritatis voluptatum architecto soluta est id ipsum quidem vel. Culpa, reprehenderit assumenda? Ratione distinctio ipsum officiis vel eaque fuga quia qui ut fugiat laborum illum tempora molestias impedit, reiciendis voluptate? Ullam tenetur maiores ipsam ex doloribus nostrum laborum velit voluptatem eum necessitatibus pariatur sint impedit id quasi perferendis sed, blanditiis ad quibusdam quam animi at? Est dignissimos iure commodi saepe quis nobis esse consequuntur sequi assumenda dolor nemo, quod aut nulla libero repellendus? Libero corrupti autem a consectetur. Voluptatem dolorum aperiam sit vero! Nulla temporibus error ducimus recusandae voluptatibus vitae, eius alias magni et perferendis! Debitis neque ea officiis iste, sed nobis aliquam doloribus a in. Accusantium temporibus aspernatur modi iste magni facilis minima consequuntur, illum repellat, placeat animi ipsam vitae molestias, tenetur debitis blanditiis.';
  let url = 'https://mui.com/material-ui/react-link/';
  return (
    <AccordionDetails sx={{ bgcolor: 'primary.main', color: 'neutral.white', borderTop: 1 }}>
      <Typography>{defaultText}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'left', mt: '15px' }}>
        {url && (
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
              href={url}
            >
              Link
            </Link>
          </Button>
        )}
      </Box>
    </AccordionDetails>
  );
};
