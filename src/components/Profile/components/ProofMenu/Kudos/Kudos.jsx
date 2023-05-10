import { useEffect, useState, useContext } from 'react';
import {
  Chip,
  IconButton,
  Popover,
  Alert,
  Box,
  Dialog,
  DialogTitle,
  Divider,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { Star } from '@mui/icons-material';
import { getKudosProtected, getKudosPublic } from '../../../../../shared/service/KudosService/KudosService';
import { KudosGiveModal } from './components/KudosGiveModal';
import { getOneSponsor } from '../../../../../shared/service/SponsorProfileService';
import { PersonContext } from '../../../../../shared/context';

export const Kudos = ({ proofId, isKudosBtnShowing = true }) => {
  const { person, setPerson } = useContext(PersonContext);
  const [kudos, setKudos] = useState(null);
  const [clickedKudos, setClickedKudos] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [kudosAmount, setKudosAmount] = useState(person.unused_kudos);
  const [openKudosInfo, setOpenKudosInfo] = useState(false);
  const handeOpenModal = (e) => {
    if (!!isKudosBtnShowing) {
      e.stopPropagation();
      setOpenModal(true);
    } else {
      e.stopPropagation();
      setAnchorEl(document);
      // setTimeout(() => setAnchorEl(null), 5000);
    }
  };

  useEffect(() => {
    if (!!isKudosBtnShowing) {
      getKudosProtected(proofId).then((kudos) => {
        setKudos(() => kudos);
      });
      getOneSponsor(person.id).then((user) => {
        setKudosAmount(user.unused_kudos);
        setPerson({ ...person, unused_kudos: user.unused_kudos });
      });
    } else {
      getKudosPublic(proofId).then((kudos) => {
        setKudos(() => kudos);
      });
    }
    setClickedKudos(false);
  }, [proofId, clickedKudos, person.unused_kudos]);

  const message = (kudos) => {
    if (!!isKudosBtnShowing) {
      if (kudos.kudos_on_proof && kudos.kudos_from_me) {
        if (kudos.kudos_on_proof - kudos.kudos_from_me > 0) {
          return `${kudos.kudos_from_me} your stars and ${kudos.kudos_on_proof - kudos.kudos_from_me} others`;
        } else {
          return `${kudos.kudos_from_me} your stars only`;
        }
      } else if (kudos.kudos_on_proof && !kudos.kudos_from_me) {
        return `${kudos.kudos_on_proof} others stars`;
      } else {
        return 'No one donated stars to this proof yet';
      }
    } else {
      if (kudos.kudos_on_proof) {
        return `${kudos.kudos_on_proof} stars`;
      } else {
        return 'No one donated stars to this proof yet';
      }
    }
  };

  return (
    <>
      <Chip
        icon={
          <IconButton aria-label={kudos !== null ? kudos.kudos_on_proof : ''} sx={{ p: 0 }}>
            <Star sx={{ fontSize: 28, color: kudos?.is_kudosed ? 'secondary.main' : 'neutral.white' }} />
          </IconButton>
        }
        label={kudos && message(kudos)}
        sx={{
          bgcolor: 'neutral.whiteGrey',
          color: 'neutral.white',
          p: 0,
        }}
        clickable={!!isKudosBtnShowing}
        onClick={handeOpenModal}
      />

      {!isKudosBtnShowing && (
        // <Popover
        //   id={'talantPopUp'}
        //   open={!!anchorEl}
        //   onClose={() => setAnchorEl(null)}
        //   anchorEl={anchorEl}
        //   anchorOrigin={{
        //     vertical: 'bottom',
        //     horizontal: 'right',
        //   }}
        // >
        //   <Alert sx={{ fontSize: '16px' }} severity="warning">
        //     Only sponsors can donate stars to proofs!
        //   </Alert>
        // </Popover>
        <Dialog open={!!anchorEl} onClick={() => setAnchorEl(null)}>
          <DialogTitle variant="h5" sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
            Your has 00 kudos
          </DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText sx={{ mb: 1 }}>
              Are you sure you want to delete your proof? All of your data will be permanently removed.
              <strong> This process cannot be undone!</strong>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setAnchorEl(null)}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {!!isKudosBtnShowing && (
        <KudosGiveModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setClickedKudos={setClickedKudos}
          proofId={proofId}
          kudosAmount={kudosAmount}
        />
      )}
    </>
  );
};
