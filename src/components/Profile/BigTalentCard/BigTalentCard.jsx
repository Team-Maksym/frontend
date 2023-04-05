import { useContext, useState } from 'react';
import { TalentContext } from '../../../shared/context/TalentContext';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  CardActions,
} from '@mui/material';
import { Email, Cake, School, WorkHistory, Edit, Delete } from '@mui/icons-material';
import { EditModal } from '../EditModal';

export const BigTalentCard = () => {
  const { talent } = useContext(TalentContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!talent) {
    return null;
  }

  let localAvatar = null;
  if (talent.avatar) {
    localAvatar = `https://drive.google.com/uc?export=view&id=${talent.avatar.slice(32, -20)}`;
  }

  const icons = { email: <Email />, birthday: <Cake />, education: <School />, experience: <WorkHistory /> };

  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center', p: 2, borderRadius: 3 }}>
      <Avatar
        alt={talent.full_name}
        src={localAvatar || `${localAvatar}`}
        sx={{
          bgcolor: 'secondary.main',
          width: '150px',
          height: '150px',
          m: '15px auto',
          fontSize: '50px',
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {talent.full_name}
        </Typography>
        <List>
          {Object.keys(icons).map((item) => (
            <ListItem disablePadding sx={{ m: '7px auto' }} key={item}>
              <ListItemIcon
                sx={{
                  justifyContent: 'center',
                }}
              >
                {icons[item]}
              </ListItemIcon>
              <ListItemText primary={talent[item] || '-'} />
            </ListItem>
          ))}
        </List>
        <Typography variant="body2" color="text.secondary">
          {talent.positions || '-'}
        </Typography>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton aria-label="delete" color="primary">
            <Delete />
          </IconButton>
          <IconButton aria-label="edit" color="primary" onClick={handleEditProfileClick}>
            <Edit />
          </IconButton>
        </CardActions>
        <EditModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </CardContent>
    </Card>
  );
};
