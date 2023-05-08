import { Check, Close, Star } from '@mui/icons-material';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
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
  Slider,
} from '@mui/material';
import { useState, useContext } from 'react';
import { PersonContext } from '../../../../../../../shared/context';
import { postKudos } from '../../../../../../../shared/service/KudosService/KudosService';

export const KudosGiveModal = ({ openModal, setOpenModal, setClickedKudos, proofId }) => {
  const { person } = useContext(PersonContext);
  const [donateSuccess, setDonateSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [donateAmount, setDonateAmount] = useState(null);
  const [kudosAmount, setKudosAmount] = useState(person.unused_kudos);

  const donateKudos = (e) => {
    postKudos(proofId, donateAmount)
      .then(() => {
        setClickedKudos(true);
        setLoading(() => true);
        setTimeout(() => setLoading(() => false), 2000);
        setDonateSuccess(() => true);
      })
      .catch((error) => console.log(error));
	};

  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="contained-Dialog-title-vcenter"
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2, bgcolor: 'neutral.white', py: 2, color: 'neutral.whiteGrey' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <DialogTitle id="contained-Dialog-title-vcenter">Donate stars</DialogTitle>
        <IconButton sx={{ mr: 3 }} onClick={() => setOpenModal(false)}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AppShortcutIcon sx={{ width: '2.5em', height: '2.5em', color: 'neutral.whiteGrey' }} />
            <Box sx={{ p: 1 }}>
              <Typography variant="h6">Stars amount</Typography>
              <Typography variant="body">How many stars do you wanna donate?</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography fontSize="2.5em">{kudosAmount}</Typography>
            <Star sx={{ width: '1.7em', height: '1.7em', color: 'secondary.main' }} />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ ml: 0.3, mt: 3 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            onChange={(e) => {
              setDonateAmount(e.target.value);
            }}
            valueLabelDisplay="auto"
            step={
              ('' + kudosAmount)[0] > 5
                ? +('10e' + (('' + kudosAmount).length - 3))
                : +('10e' + (('' + kudosAmount).length - 2))
            }
            marks
            min={0}
            max={kudosAmount - (kudosAmount % 10)}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.3 }}>
          <Star sx={{ color: 'action.active', mr: 1, my: 0.5, mt: 2 }} />
          <TextField
            // error={!!error}
            id="input-with-sx"
            label={!donateAmount && !(donateAmount > 0) && 'Enter amount of stars'}
            value={donateAmount}
            variant="standard"
            onChange={(e) => {
              setDonateAmount(e.target.value);
            }}
            // helperText={error && 'Incorrect value'}
          />
        </Box>
        {donateSuccess && loading && (
          <Alert variant="outlined" icon={<Check fontSize="inherit" />} severity="success" sx={{ mt: 2 }}>
            Operation completed successfully!
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', m: 1 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            donateKudos();
            setKudosAmount((oldAmount) => oldAmount - +donateAmount);
          }}
        >
          Donate
        </Button>
      </DialogActions>
    </Dialog>
  );
};
