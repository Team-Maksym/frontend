import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export const Modal = ({ title, open, onClose, children }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="contained-Dialog-title-vcenter"
      scroll={'body'}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 4, py: 5 },
      }}
    >
      <DialogTitle id="contained-Dialog-title-vcenter">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
