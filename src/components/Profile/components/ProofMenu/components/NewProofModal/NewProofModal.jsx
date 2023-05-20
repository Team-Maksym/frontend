import * as yup from 'yup';
import { Form } from '../../../../../../shared/components/Form';
import { addTalentProof } from '../../../../../../shared/service/TalentProfileService/TalentProfileService';
import { getCurrentPersonId } from '../../../../../../shared/service/AuthorizationService';
import { ProofTextField } from '../../../../../../shared/components/Fields/ProofTextField';
import { ProofLinkField } from '../../../../../../shared/components/Fields/ProofLinkField/ProofLinkField';
import { Button, Dialog, DialogContent, DialogTitle, Box, Chip, Stack, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProofTitleField } from '../../../../../../shared/components/Fields/ProofTitleField/ProofTitleField';
import { SkillAutocomplete } from '../../../../../ProofList/components/SkillAutocomplete';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export const NewProofModal = ({ open, onClose, setUpdated }) => {
  const navigate = useNavigate();
  const [newSkills, setNewSkills] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState('none');
  const [skill, setSkill] = useState('');

  const handleAddSkill = (newSkill) => {
    setSearchDisplay('none');
    if (!newSkills.includes(newSkill)) {
      setNewSkills((prev) => [...prev, newSkill]);
    }
  };

  const newRenderSkills = () => {
    if (!!newSkills && newSkills.length > 0) {
      return newSkills.map((item, i) => {
        return <Chip key={i} label={item} variant="outlined" onDelete={() => handleDelete(item)} sx={{ m: '5px' }} />;
      });
    } else {
      return (
        <Box display="flex" alignItems="center">
          <Typography sx={{ color: 'neutral.whiteGrey', opacity: '0.8' }}> There are no skills yet. </Typography>
        </Box>
      );
    }
  };

  const handleDelete = (skillValue) => {
    if (typeof skillValue !== 'number') {
      newSkills.forEach((item, i) => {
        const newSkillClone = [...newSkills];
        if (item === skillValue) {
          newSkillClone.splice(i, 1);
          setNewSkills(newSkillClone);
        }
      });
    }
  };

  const onAddProofHandler = () => {
    let talentId = getCurrentPersonId();
    return async (values) => {
      const newProof = {
        title: values.title,
        description: values.desc,
        link: values.link,
        skills: newSkills,
      };
      if (Object.keys(newProof).length === 0) {
        onClose();
      } else {
        try {
          await addTalentProof(talentId, newProof);
          setUpdated(true);
          navigate(`/profile/${talentId}?status=draft`);
        } catch (error) {
          console.error(error);
        }
        onClose();
        setNewSkills([]);
      }
    };
  };

  const addProof = {
    id: 'add-modal',
    submitBtnName: 'Accept',
    title: 'You can add a new proof',
    onSubmit: onAddProofHandler(addTalentProof),
    initialValues: {
      title: '',
      desc: '',
      link: '',
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .required('Title is required')
        .min(2, 'Title must be at least 2 characters')
        .max(80, 'Title must be at most 50 characters'),
      desc: yup.string().required('Some information is required'),
      link: yup.string().url('It must be a valid url').nullable(),
    }),
    fieldsRenderers: {
      title: ProofTitleField,
      desc: ProofTextField,
      link: ProofLinkField,
    },
  };

  return (
    <Dialog
      open={open}
      onClose={(e) => {
        e.stopPropagation();
        onClose();
        setNewSkills([]);
      }}
      aria-labelledby="contained-Dialog-title-vcenter"
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 4, bgcolor: 'neutral.white', py: 0 },
      }}
    >
      <DialogTitle id="contained-Dialog-title-vcenter">{addProof.title}</DialogTitle>
      <DialogContent>
        <Form {...addProof}>
          <Box sx={{ width: '100%', mt: '15px' }}>
            <Stack display="flex" flexDirection="row" flexWrap="wrap" mb="15px">
              {newRenderSkills()}
              <IconButton aria-label="addSkill" onClick={() => setSearchDisplay('block')}>
                {/* <AddCircleOutlinedIcon sx={{ fontSize: 30}} /> */}
                <AddIcon />
              </IconButton>
            </Stack>
            <Box display={searchDisplay}>
              <SkillAutocomplete handleAddSkill={handleAddSkill} skill={skill} setSkill={setSkill} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <Button
              variant="outlined"
              onClick={(e) => {
                e.stopPropagation();

                onClose();
                setNewSkills([]);
              }}
              sx={{ mt: 4, px: 8, borderRadius: '6px' }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 4, px: 8, borderRadius: '6px' }}
            >
              {addProof.submitBtnName}
            </Button>
          </Box>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
