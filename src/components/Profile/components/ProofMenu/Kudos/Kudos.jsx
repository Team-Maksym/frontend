import { useEffect, useState } from 'react';
import { Chip, IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';
import { getKudos, postKudos } from '../../../../../shared/service/KudosService/KudosService';

export const Kudos = ({ proofId, isKudosBtnShowing = true }) => {
  const [kudos, setKudos] = useState(null);
  const [clickedKudos, setClickedKudos] = useState(false);

  useEffect(() => {
    getKudos(proofId).then((kudos) => {
      setKudos(() => kudos);
    });
    setClickedKudos(false);
  }, [proofId, clickedKudos]);

  const onClickHandler = () => {
    postKudos(proofId, 1)
      .then(() => setClickedKudos(true))
      .catch((error) => console.log(error));
  };

  console.log(kudos);

  const message = (kudos) => {
    if (kudos.kudos_on_proof && kudos.kudos_from_me) {
      if (kudos.kudos_on_proof - kudos.kudos_from_me > 0) {
        return `${kudos.kudos_from_me} your kudos and ${kudos.kudos_on_proof - kudos.kudos_from_me} others`;
      } else {
        return `${kudos.kudos_from_me} your kudos only`;
      }
    } else if (kudos.kudos_on_proof && !kudos.kudos_from_me) {
      return `${kudos.kudos_on_proof} others kudos`;
    } else {
      return 'No one gave kudos to this proof yet';
    }
  };

  return (
    <Chip
      disabled={!isKudosBtnShowing}
      icon={
        <IconButton aria-label={kudos !== null ? kudos.kudos_on_proof : ''} onClick={onClickHandler} sx={{ p: 0 }}>
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
      onClick={(e) => e.stopPropagation()}
    />
  );
};
