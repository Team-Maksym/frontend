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
  Chip,
  Box
} from '@mui/material';
import { Email, Cake, School, WorkHistory, Delete, Edit } from '@mui/icons-material';
import { DeleteAccountModal } from '../DeleteAccountModal';
import { EditProfileModal } from '../EditModal';

export const BigTalentCard = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { talent, setTalent } = useContext(TalentContext);

  if (!talent) {
    return null;
  }

  let localAvatar = null;
  if (talent.avatar) {
    localAvatar = `https://drive.google.com/uc?export=view&id=${talent.avatar.slice(32, -20)}`;
  }

  const icons = {
    email: <Email />,
    birthday: <Cake />,
    education: <School />,
    experience: <WorkHistory />,
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(() => true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(() => false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(() => true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(() => false);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 360,
          textAlign: 'center',
          mt: 7,
          p: 2,
          borderRadius: 3,
          bgcolor: 'primary.main',
          color: 'neutral.white',
        }}
      >
        <Avatar
          alt={talent.full_name.trim().charAt(0).toUpperCase() + talent.full_name.trim().slice(1)}
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
                    color: 'neutral.white',
                  }}
                >
                  {icons[item]}
                </ListItemIcon>
                <ListItemText primary={talent[item] || '-'} />
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ m: '7px auto' }} key="positions">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0,
                }}
              >
                {talent.positions.map((position) => (
                  <Chip
                    key={position}
                    label={position}
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'neutral.white',
                      fontSize: '14px',
                      m: 1,
                      p: 1,
                    }}
                  />
                ))}
              </Box>
            </ListItem>
          </List>
        </CardContent>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Tooltip title="Delete" placement="top">
            <IconButton onClick={openDeleteModal}>
              <Delete sx={{ color: 'secondary.main', justifyContent: 'space-between' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit" placement="top">
            <IconButton onClick={openEditModal}>
              <Edit sx={{ color: 'secondary.main', justifyContent: 'space-between' }} />
            </IconButton>
          </Tooltip>
        </CardActions>
        <DeleteAccountModal
          open={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          talentId={talent.id}
          setTalent={setTalent}
        />
        <EditProfileModal open={isEditModalOpen} onClose={handleCloseEditModal} talent={talent} setTalent={setTalent} />
      </Card>
    </>
  );
};
