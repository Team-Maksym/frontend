import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Box } from '@mui/material';
import { editTalentProof } from '../../../../../../shared/service/ProfileService';
import { useContext } from 'react';
import { ProofsOneTalentContext } from '../../../../../../shared/context';

export const ProofItemProfile = ({ val, id, status }) => {
  const { setProofId, setOpenDeleteModal, setOpenEditModal, setProofInfo, talentId, setUpdated, findCurrentProofInfo } =
    useContext(ProofsOneTalentContext);

  const changeStatus = (status) => {
    try {
      editTalentProof(talentId, id, { status: status });
      setUpdated(true);
    } catch (error) {
      console.error(error);
    }
  };

  const getChangeStatusHandler = (status) => (e) => {
    changeStatus(status);
    e.stopPropagation();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        mt: { xs: '10px', md: 0 },
        pl: { md: '15px' },
        ml: { md: 'auto' },
        alignItems: 'center',
        justifyContent: 'left',
      }}
    >
      {val !== 0 && (
        <Button
          variant="contained"
          sx={{
            bgcolor: 'secondary.main',
            color: 'neutral.white',
            mr: '10px',
            ':hover': {
              bgcolor: 'primary.main',
            },
          }}
          onClick={getChangeStatusHandler('PUBLISHED')}
        >
          Publish
        </Button>
      )}
      {val !== 2 && (
        <Button
          variant="contained"
          sx={{
            bgcolor: 'secondary.main',
            color: 'neutral.white',
            mr: '10px',
            ':hover': {
              bgcolor: 'primary.main',
            },
          }}
          onClick={getChangeStatusHandler('HIDDEN')}
        >
          Hide
        </Button>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', marginX: '10px' }}>
        <DeleteIcon
          onClick={() => {
            setOpenDeleteModal(true);
            setProofId(id);
          }}
          sx={{
            color: 'neutral.white',
            transition: '.2s ease',
            '&:hover': {
              color: 'secondary.main',
            },
          }}
        />
      </Box>
      {val === 1 && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <EditIcon
            onClick={() => {
              setOpenEditModal(true);
              setProofId(id);
              setProofInfo(findCurrentProofInfo(id, status));
            }}
            sx={{
              color: 'neutral.white',
              transition: '.2s ease',
              '&:hover': {
                color: 'secondary.main',
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
};
