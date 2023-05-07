import { useState } from 'react';
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
  Box,
  Button,
} from '@mui/material';
import { Email, Cake, School, WorkHistory, Delete, Edit } from '@mui/icons-material';
import { DeleteAccountModal } from '../DeleteAccountModal';
import { EditProfileModal } from '../EditModal';
import { AvatarValidation } from '../../../../shared/components/AvatarValidation';
import { KudosAmountModal } from '../KudosAmountModal';

export const BigTalentCard = ({ talent, setTalent, actionsAccess }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isKudosAmountModalOpen, setIsKudosAmountModalOpen] = useState(false);

  let localAvatar = AvatarValidation(talent.avatar);

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

  const openKudosAmountModal = () => {
    setIsKudosAmountModalOpen(() => true);
  };

  const handleCloseKudosAmountModal = () => {
    setIsKudosAmountModalOpen(() => false);
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 360,
          textAlign: 'center',
          mt: 7,
          p: 2,
          borderRadius: 3,
          bgcolor: 'primary.main',
          color: 'neutral.white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
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
            {actionsAccess && (
              <Button variant="contained" color="secondary" onClick={openKudosAmountModal}>
                Add balance
              </Button>
            )}
          </CardContent>
        </Box>
        {actionsAccess && (
          <>
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
            <EditProfileModal
              open={isEditModalOpen}
              onClose={handleCloseEditModal}
              talent={talent}
              setTalent={setTalent}
            />
            <KudosAmountModal open={isKudosAmountModalOpen} onClose={handleCloseKudosAmountModal} />
          </>
        )}
      </Card>
    </>
  );
};

