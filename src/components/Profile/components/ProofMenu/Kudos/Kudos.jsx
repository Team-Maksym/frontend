import { useEffect, useState } from 'react';
import { Chip, IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';
import { getKudos, postKudos } from '../../../../../shared/service/KudosService/KudosService';

export const Kudos = ({ proofId, isKudosBtnShowing = true }) => {
  const [kudos, setKudos] = useState(null);

  useEffect(() => {
    getKudos(proofId).then((kudos) => {
      setKudos(() => kudos);
    });
  }, [proofId]);

  const onClickHandler = () => {
    postKudos(proofId, 1).catch((error) => console.log(error));
    // .then(
    //   (kudos) => {
    //     console.log("kudos", kudos);
    //     // setKudos((prevState) => ({ kudos: { ...prevState.kudos, kudos_on_proof: prevState.kudos_on_proof + 1 } }));
    //   },
    //   (error) => {
    //     if (error.response.status === 409) {
    //       setIsKudasPlaced(() => true);
    //     } else {
    //       throw error;
    //     }
    //   },
    // );
  };

  return (
    <Chip
      disabled={!isKudosBtnShowing}
      icon={
        <IconButton aria-label={kudos !== null ? kudos.kudos_on_proof : ''} onClick={onClickHandler} sx={{ p: 0 }}>
          <Star sx={{ fontSize: 28, color: kudos?.is_kudosed ? 'secondary.main' : 'neutral.white' }} />
        </IconButton>
      }
      label={kudos !== null ? kudos.kudos_on_proof : ''}
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
