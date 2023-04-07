import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Box, Typography, Modal } from '@mui/material';
export const ProofItemProfile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 'auto', pl: '15px' }}>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'secondary.main',
          color: 'neutral.white',
          mr: '10px',
          ':hover': {
            bgcolor: 'primary.main',
          },
        }}
      >
        Publish
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: 'secondary.main',
          color: 'neutral.white',
          mr: '10px',
          ':hover': {
            bgcolor: 'primary.main',
          },
        }}
      >
        Hide
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', marginX: '10px' }}>
        <DeleteIcon
          onClick={handleOpen}
          sx={{
            color: 'neutral.white',
            transition: '.2s ease',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        />
        <Modal keepMounted open={open} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 500,
              bgcolor: 'neutral.white',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h5">You really want to delete this proof</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mt: '30px' }}>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  ':hover': {
                    bgcolor: 'secondary.main',
                  },
                }}
              >
                No
              </Button>
              <Button onClick={handleClose} variant="contained" sx={{ mr: '10px', bgcolor: 'secondary.main' }}>
                Yes
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EditIcon
          sx={{
            color: 'neutral.white',
            transition: '.2s ease',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        />
      </Box>
    </Box>
  );
};
