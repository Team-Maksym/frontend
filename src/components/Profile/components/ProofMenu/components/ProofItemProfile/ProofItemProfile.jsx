import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Box } from '@mui/material';
import { editTalentProof } from '../../../../../../shared/service/ProfileService';
export const ProofItemProfile = ({
  val,
  id,
  setProofId,
  setOpenDeleteModal,
  setOpenEditModal,
  status,
  findProofInfo,
  setProofInfo,
  talentId,
  setUpdated,
}) => {
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
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: 'auto', pl: '15px' }}>
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
              setProofInfo(findProofInfo(id, status));
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

