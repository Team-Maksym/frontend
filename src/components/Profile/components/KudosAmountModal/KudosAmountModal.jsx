import { Check, Close, Star, Wallet } from '@mui/icons-material';
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
  Alert,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getOneSponsor, patchSponsor } from '../../../../shared/service/SponsorProfileService';

export const KudosAmountModal = ({ open, onClose, person }) => {
  const [kudosAmount, setKudosAmount] = useState(null);
  const [newKudosAmount, setNewKudosAmount] = useState(null);
  const [error, setError] = useState('');
  const [increaseSuccess, setIncreaseSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOneSponsor(person.id).then((person) => {
      setKudosAmount(() => person.unused_kudos);
    });
  }, [person.id]);

  const onIncreaseKudosAmount = () => {
    person.unused_kudos = +newKudosAmount;
    patchSponsor(person.id, person).then(
      (person) => {
        setKudosAmount(() => person.unused_kudos);
        setLoading(() => true);
        setTimeout(() => setLoading(() => false), 2000);
        setIncreaseSuccess(() => true);
      },
      (error) => {
        console.log('error');
      },
    );
  };

  const onValueChange = (e) => {
    if (e.target.value > 0) {
      setNewKudosAmount(e.target.value);
      setError(() => '');
    } else {
      setNewKudosAmount(e.target.value);
      setError(() => 'Number cannot be 0 or negative');
    }
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
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.3, mt: 1 }}>
          <Star sx={{ color: 'action.active', mr: 1, my: 0.5, mt: 2 }} />
          <TextField
            error={!!error}
            id="input-with-sx"
            label="Enter amount of stars"
            variant="standard"
            onChange={onValueChange}
            helperText={error && 'Incorrect value'}
          />
        </Box>
        {increaseSuccess && loading && (
          <Alert variant="outlined" icon={<Check fontSize="inherit" />} severity="success" sx={{ mt: 2 }}>
            Operation completed successfully!
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', m: 1 }}>
        <Button variant="contained" color="secondary" onClick={onIncreaseKudosAmount}>
          Change balance
        </Button>
      </DialogActions>
    </Dialog>
  );
};
