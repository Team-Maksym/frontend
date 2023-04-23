import { Divider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { deleteProof } from '../../../../../../shared/service/ProfileService';

export const DeleteProofModal = ({ openModal, setUpdated, setOpenModal, talentId, proofId }) => {
  const handleDeleteProof = async (talentId, id) => {
    await deleteProof(talentId, id);
    setOpenModal(false);
    setUpdated(true);
  };

  return (
    <Dialog
      open={openModal}
      onClick={() => setOpenModal(false)}
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
        <Button variant="outlined">Cancel</Button>
        <Button
          variant="contained"
          sx={{ bgcolor: '#d32f2f' }}
          onClick={() => {
            handleDeleteProof(talentId, proofId);
          }}
        >
          Delete proof
        </Button>
      </DialogActions>
    </Dialog>
  );
};