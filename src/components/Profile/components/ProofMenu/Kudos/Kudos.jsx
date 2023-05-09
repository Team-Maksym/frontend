import { useEffect, useState } from 'react';
import { Chip, IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';
import { getKudos } from '../../../../../shared/service/KudosService/KudosService';
import { KudosGiveModal } from './components/KudosGiveModal';

export const Kudos = ({ proofId, isKudosBtnShowing = true }) => {
  const [kudos, setKudos] = useState(null);
  const [clickedKudos, setClickedKudos] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getKudos(proofId).then((kudos) => {
      setKudos(() => kudos);
    });
    setClickedKudos(false);
  }, [proofId, clickedKudos]);


  const message = (kudos) => {
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
  };

  return (
    <>
      <Chip
        disabled={!isKudosBtnShowing}
        icon={
          <IconButton aria-label={kudos !== null ? kudos.kudos_on_proof : ''} x={{ p: 0 }}>
            <Star sx={{ fontSize: 28, color: kudos?.is_kudosed ? 'secondary.main' : 'neutral.white' }} />
          </IconButton>
        }
        label={kudos && message(kudos)}
        sx={{
          bgcolor: 'neutral.whiteGrey',
          color: 'neutral.white',
          p: 0,
        }}
        clickable={false}
        onClick={(e) => {
          e.stopPropagation();
          setOpenModal(true);
        }}
      />
      <KudosGiveModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setClickedKudos={setClickedKudos}
        proofId={proofId}
      />
    </>
  );
};
