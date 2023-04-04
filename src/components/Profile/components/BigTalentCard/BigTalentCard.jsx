import { useContext, useState } from 'react';
import { TalentContext } from '../../../../shared/context/TalentContext';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Email, Cake, School, WorkHistory, Delete } from '@mui/icons-material';
import { DeleteAccountModal } from '../DeleteAccountModal';

export const BigTalentCard = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { talent, setTalent } = useContext(TalentContext);

  if (!talent) {
    return null;
  }

  let localAvatar = null;
  if (talent.avatar) {
    localAvatar = `https://drive.google.com/uc?export=view&id=${talent.avatar.slice(32, -20)}`;
  }

  const icons = { email: <Email />, birthday: <Cake />, education: <School />, experience: <WorkHistory /> };

  const openDeleteModalModal = () => {
    setIsDeleteModalOpen(() => true);
  };

  const handleClose = () => {
    setIsDeleteModalOpen(() => false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 360,
          textAlign: 'center',
          p: 2,
          borderRadius: 3,
          bgcolor: 'primary.main',
          color: 'neutral.white',
        }}
      >
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
          <CardActions disableSpacing>
            <Tooltip title="Delete" placement="top">
              <IconButton onClick={openDeleteModalModal}>
                <Delete sx={{ color: 'neutral.white', justifyContent: 'space-between' }} />
              </IconButton>
            </Tooltip>
          </CardActions>
          <DeleteAccountModal open={isDeleteModalOpen} onClose={handleClose} talentId={talent.id} setTalent={setTalent} />
        </CardContent>
      </Card>
    </>
  );
};

