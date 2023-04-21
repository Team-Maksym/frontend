import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProof } from '../../../../../../shared/service/ProfileService';
import {
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from '@mui/material';

export const ProofItemProfile = ({ val, talent, id, setOpenModal, openModal, setUpdated }) => {
  const [proofId, setProofId] = useState(id);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleDeleteProof = async (talent, id) => {
    await deleteProof(talent, id);
    setOpenModal(false);
    setUpdated(true);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 'auto', pl: '15px' }}>
      {val !== 0 && (
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
      )}
      {val !== 2 && (
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
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', marginX: '10px' }}>
        <DeleteIcon
          onClick={() => {
            console.log(id)
            setProofId(id);
            handleOpenModal();
          }}
          sx={{
            color: 'neutral.white',
            transition: '.2s ease',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        />
        <Dialog
          id={proofId}
          open={openModal}
          onClick={handleCloseModal}
          maxWidth="sm"
          PaperProps={{
            sx: { borderRadius: 2, bgcolor: '#fce4ec', px: 2, py: 2 },
          }}
        >
          <DialogTitle variant="h5" sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
            Delete proof?
          </DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText sx={{ mb: 1 }}>
              Are you sure you want to delete your proof? All of your data will be permanently removed.
              <strong> This process cannot be undone!</strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="contained" sx={{ bgcolor: '#d32f2f' }} onClick={() => handleDeleteProof(talent, proofId)}>
             { `Delete proof + ${proofId}`}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      {val == 1 && (
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
      )}
    </Box>
  );
};
