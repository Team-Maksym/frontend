import { useEffect, useState } from 'react';
import { Chip, IconButton, Popover, Alert } from '@mui/material';
import { Star } from '@mui/icons-material';
import { getKudosProtected, getKudosPublic } from '../../../../../shared/service/KudosService/KudosService';
import { KudosGiveModal } from './components/KudosGiveModal';

export const Kudos = ({ proofId, isKudosBtnShowing = true }) => {
  const [kudos, setKudos] = useState(null);
  const [clickedKudos, setClickedKudos] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handeOpenModal = (e) => {
    if (!!isKudosBtnShowing) {
      e.stopPropagation();
      setOpenModal(true);
    } else {
      e.stopPropagation();
      setAnchorEl(document);
      setTimeout(() => setAnchorEl(null), 5000);
    }
  };

  useEffect(() => {
    if (!!isKudosBtnShowing) {
      getKudosProtected(proofId).then((kudos) => {
        setKudos(() => kudos);
      });
    } else {
      getKudosPublic(proofId).then((kudos) => {
        setKudos(() => kudos);
      });
    }
    setClickedKudos(false);
  }, [proofId, clickedKudos]);

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
        <Popover
          id={'talantPopUp'}
          open={!!anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Alert sx={{ fontSize: '16px' }} severity="warning">
            Only sponsors can donate stars to proofs!
          </Alert>
        </Popover>
      )}

      {!!isKudosBtnShowing && (
        <KudosGiveModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setClickedKudos={setClickedKudos}
          proofId={proofId}
        />
      )}
    </>
  );
};
