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
} from '@mui/material';
import { Email, Cake, School, WorkHistory, Delete, Edit } from '@mui/icons-material';
import { DeleteAccountModal } from '../DeleteAccountModal';
import { EditProfileModal } from '../EditModal';
import { AvatarValidation } from '../../../../shared/components/AvatarValidation';

export const BigTalentCard = ({ talent, setTalent, actionsAccess }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  return (
    <>
      <Card
        sx={{
          minWidth: { xs: 290, lg: 360 },
          textAlign: 'center',
          mt: 7,
          p: 2,
          borderRadius: 3,
          bgcolor: 'primary.main',
          color: 'neutral.white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          mx: '10px',
        }}
      >
        <Box
          sx={{
            display: { xs: 'grid', lg: 'flex' },
            gridTemplateColumns: { xs: '1fr', sm: '200px 1fr', md: '350px 1fr' },
            flexDirection: { lg: 'column' },
          }}
        >
          <Box>
            <Avatar
              alt={talent.full_name.trim().charAt(0).toUpperCase() + talent.full_name.trim().slice(1)}
              src={localAvatar || `${localAvatar}`}
              sx={{
                bgcolor: 'secondary.main',
                width: { xs: '150px', md: '300px', lg: '150px' },
                height: { xs: '150px', md: '300px', lg: '150px' },
                m: '15px auto',
                mt: { sm: '5px' },
                fontSize: '50px',
              }}
            />
            <Typography variant="h5" component="div">
              {talent.full_name}
            </Typography>
          </Box>

          <CardContent sx={{ py: { sm: 0 } }}>
            <List sx={{ pt: { sm: 0 } }}>
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
          </>
        )}
      </Card>
    </>
  );
};
