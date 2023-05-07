import { AccountBalance, Close, Star, Wallet } from '@mui/icons-material';
import { Form } from '../../../../shared/components/Form';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  Divider,
  TextField,
  DialogActions,
  IconButton,
} from '@mui/material';
import { useState } from 'react';

export const KudosAmountModal = ({ open, onClose }) => {
  const [kudosAmount, setKudosAmount] = useState(null);
  const [newKudosAmount, setNewKudosAmount] = useState(null);

  // useEffect(() => {
  //   getKudos(personId).then((kudos) => {
  //     setKudosAmount(() => kudos);
  //   });
  // }, [personId]);

  const onIncreaseKudosAmount = () => {
    // postKudos(personId, newKudosAmount).then(
    //   (kudos) => {
    //     setKudosAmount(() => kudos);
    //   },
    //   (error) => {
    //     console.log("error");
    //   },
    // );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="contained-Dialog-title-vcenter"
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2, bgcolor: 'neutral.white', py: 2, color: 'neutral.whiteGrey' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <DialogTitle id="contained-Dialog-title-vcenter">Increase your balance</DialogTitle>
        <IconButton sx={{ mr: 3 }} onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Wallet sx={{ width: '2.5em', height: '2.5em', color: 'neutral.whiteGrey' }} />
            <Box sx={{ p: 1 }}>
              <Typography variant="h6">Stars</Typography>
              <Typography variant="body">Do you wanna add stars?</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontSize="2.5em">{kudosAmount}</Typography>
            <Star sx={{ width: '1.7em', height: '1.7em', color: 'secondary.main' }} />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: 0.3, mt: 1 }}>
          <Star sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Enter amount of stars"
            variant="standard"
            onClick={(e) => setNewKudosAmount(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', m: 1 }}>
        <Button variant="contained" color="secondary" onClick={onIncreaseKudosAmount}>
          Change balance
        </Button>
      </DialogActions>
    </Dialog>
  );
};

