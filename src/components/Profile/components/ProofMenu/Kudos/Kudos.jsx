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
    postKudos(proofId).then(
      () => {
        setKudos((prev) => prev + 1);
      },
      (error) => {
        if (error.response.status !== 409) {
          throw error;
        }
      },
    );
  };

  return (
    <Chip
      disabled={!isKudosBtnShowing}
      icon={
        <IconButton aria-label={kudos} onClick={onClickHandler} sx={{ p: 0 }}>
          <Star sx={{ fontSize: 28, color: isKudosBtnShowing ? 'secondary.main' : 'neutral.white' }} />
        </IconButton>
      }
      label={kudos !== null ? kudos : ''}
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'neutral.whiteGrey',
        color: 'neutral.white',
        p: 0,
      }}
      clickable={false}
      onClick={(e) => e.stopPropagation()}
    />
  );
};

