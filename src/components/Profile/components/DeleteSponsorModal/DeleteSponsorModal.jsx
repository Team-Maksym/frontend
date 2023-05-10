import { useContext } from 'react';
import {
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { deleteSponsor } from '../../../../shared/service/SponsorProfileService';
import { PersonContext } from '../../../../shared/context/PersonContext';

export const DeleteSponsorModal = ({ open, onClose, personId: sponsorId, setPerson: setSponsor }) => {
  const { signOut } = useContext(PersonContext);
  const onDeleteAccountHandler = async () => {
    await deleteSponsor(sponsorId);
    setSponsor(null);
    signOut();
  };
  return (
    <Dialog
      open={open}
      onClick={onClose}
      maxWidth="sm"
      PaperProps={{
        sx: { borderRadius: 2, bgcolor: '#fce4ec', px: 2, py: 2 },
      }}
    >
      <DialogTitle variant="h5" sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
        <IconButton>
          <Delete fontSize="large" sx={{ color: '#d32f2f' }} />
        </IconButton>
        Delete profile?
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText sx={{ mb: 1 }}>
          Are you sure you want to delete your account? All of your data will be permanently removed.
          <strong> You can recover this account using your e-mail address</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#d32f2f',
            color: 'neutral.white',
            mr: '10px',
            ':hover': {
              bgcolor: 'primary.main',
            },
          }}
          onClick={onDeleteAccountHandler}
        >
          Delete account
        </Button>
      </DialogActions>
    </Dialog>
  );
};
