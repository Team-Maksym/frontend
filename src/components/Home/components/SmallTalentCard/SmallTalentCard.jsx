import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const SmallTalentCard = ({ id, talentName, position, avatar }) => {
  const navigate = useNavigate();

  const onOpenProfileHandler = () => {
    navigate(`profile/${id}`);
  }

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
