import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Box } from '@mui/material';
import { deleteProof } from '../../../../../../shared/service/ProfileService';
import { getOneTalentProofs } from '../../../../../../shared/service/ProfileService';

import { Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
export const ProofItemProfile = ({ val, talent, id, status, setStatus, setOpenModal, openModal }) => {
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const handleDeleteProof = async (talent, id) => {
    await deleteProof(talent, id);
    getOneTalentProofs(talent, status).then((proofs) => {
      switch (status) {
        case 'PUBLISHED':
          setStatus(() => proofs.data);
          break;
        case 'DRAFT':
          setStatus(() => proofs.data);
          break;
        case 'HIDDEN':
          setStatus(() => proofs.data);
          break;
      }
    });
    setOpenModal(false);
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
          onClick={handleOpenModal}
          sx={{
            color: 'neutral.white',
            transition: '.2s ease',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        />
        <Dialog
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
            <Button variant="contained" sx={{ bgcolor: '#d32f2f' }} onClick={() => handleDeleteProof(talent, id)}>
              Delete proof
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
