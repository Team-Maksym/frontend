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
import { deleteTalent } from '../../../../shared/service/TalentProfileService';
import { PersonContext } from '../../../../shared/context/PersonContext';

export const DeleteAccountModal = ({ open, onClose, talentId, setTalent }) => {
  const { signOut } = useContext(PersonContext);

  const onDeleteAccountHandler = async () => {
    await deleteTalent(talentId);
    setTalent(null);
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
          <strong> This process cannot be undone!</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#d32f2f' }} onClick={onDeleteAccountHandler}>
          Delete account
        </Button>
      </DialogActions>
    </Dialog>
  );
};
