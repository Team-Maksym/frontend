import Avatar from '@mui/material/Avatar';
import { CardActionArea, Typography, CardContent, Card } from '@mui/material';
import { useContext } from 'react';
import { PersonContext } from '../../../../shared/context/PersonContext';

import { useNavigate } from 'react-router-dom';

export const SmallTalentCard = ({ id, talentName, position, avatar }) => {
  const { person, openAuthModal } = useContext(PersonContext);
  const navigate = useNavigate();

  const onOpenProfileHandler = () => {
    if (person) {
      navigate(`profile/${id}`);
    } else {
      openAuthModal('signIn');
    }
  };

  return (
    <CardActionArea sx={{ height: '100%' }} onClick={onOpenProfileHandler}>
      <Card sx={{ justifyContent: 'center', display: 'grid', height: '100%', bgcolor: 'primary.main' }}>
        <CardContent>
          <Avatar
            alt={talentName.trim().charAt(0).toUpperCase() + talentName.trim().slice(1)}
            src={avatar}
            sx={{
              bgcolor: 'secondary.main',
              width: '90px',
              height: '90px',
              m: '15px auto',
              fontSize: '28px',
            }}
          />
          <Typography variant="h5" component="div" sx={{ color: 'neutral.white', textAlign: 'center' }}>
            {talentName}
          </Typography>
          <Typography variant="body2" component="div" color="neutral.white" sx={{ textAlign: 'center' }}>
            {position}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

