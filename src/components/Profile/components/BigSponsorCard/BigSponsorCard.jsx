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
import { Business, Delete, Edit, Wallet } from '@mui/icons-material';
import { DeleteAccountModal } from '../DeleteAccountModal';
import { EditSponsorModal } from '../EditSponsorModal';
import { AvatarValidation } from '../../../../shared/components/AvatarValidation';
import { KudosAmountModal } from '../KudosAmountModal';
import { DeleteSponsorModal } from '../DeleteSponsorModal/DeleteSponsorModal';
import StarIcon from '@mui/icons-material/Star';

export const BigSponsorCard = ({ person, setPerson, actionsAccess }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isKudosAmountModalOpen, setIsKudosAmountModalOpen] = useState(false);
  let localAvatar = AvatarValidation(person.avatar);

  const icons = {
    company: <Business />,
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
          minWidth: { xs: 290, lg: 360 },
          maxWidth: { lg: 360 },
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
          <Box>
            <Avatar
              alt={person.full_name.trim().charAt(0).toUpperCase() + person.full_name.trim().slice(1)}
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
                {person.full_name}
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
                    <ListItemText primary={person[item] || '-'} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', mb:'20px' }}>
            <StarIcon sx={{ width: '1.8em', height: '1.7em', color: 'secondary.main' }} />
            <Typography fontSize="1.8em">{person.unused_kudos}</Typography>
          </Box>
          <Box>
            <Button
              variant="elevated"
              startIcon={<Wallet />}
              sx={{
                bgcolor: 'secondary.main',
                ':hover': {
                  bgcolor: 'secondary.dark',
                },
              }}
              onClick={openKudosAmountModal}
            >
              Change balance
            </Button>
          </Box>
        </Box>
        {actionsAccess && (
          <>
            <DeleteSponsorModal
              open={isDeleteModalOpen}
              onClose={handleCloseDeleteModal}
              personId={person.id}
              setPerson={setPerson}
            />
            <EditSponsorModal
              open={isEditModalOpen}
              onClose={handleCloseEditModal}
              person={person}
              setPerson={setPerson}
            />
            <KudosAmountModal open={isKudosAmountModalOpen} onClose={handleCloseKudosAmountModal} person={person} />
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
              </Box>
            </Box>
          </>
        )}
      </Card>
    </>
  );
};
