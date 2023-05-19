import * as yup from 'yup';
import { Form } from '../../../../../../shared/components/Form';
import { getCurrentPersonId } from '../../../../../../shared/service/AuthorizationService';
import { ProofTextField } from '../../../../../../shared/components/Fields/ProofTextField';
import { ProofLinkField } from '../../../../../../shared/components/Fields/ProofLinkField/ProofLinkField';
import { Button, Dialog, DialogContent, DialogTitle, Box, Chip, Stack, IconButton, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProofTitleField } from '../../../../../../shared/components/Fields/ProofTitleField/ProofTitleField';
import { editTalentProof } from '../../../../../../shared/service/TalentProfileService';
import { useContext, useState, useEffect } from 'react';
import { ProofsOneTalentContext } from '../../../../../../shared/context';
import { SkillAutocomplete } from '../../../../../ProofList/components/SkillAutocomplete';
import AddIcon from '@mui/icons-material/Add';
import { getOneProofSkill, postOneProofSkill, deleteSkill } from '../../../../../../shared/service/SkillService';

export const EditProofModal = ({ openEditModal, proofInfo }) => {
  const { setOpenEditModal, setUpdated } = useContext(ProofsOneTalentContext);
  const navigate = useNavigate();
  const [searchDisplay, setSearchDisplay] = useState('none');
  const [newSkills, setNewSkills] = useState([]);
  const [startSkills, setStartSkills] = useState([]);
  const [proofSkills, setProofSkills] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [deleteSkillsId, setDeleteSkillsId] = useState([]);
  const [skill, setSkill] = useState('');


  const handleAddSkill = (newSkill) => {
    console.log(newSkill)
    setSearchDisplay('none');
    allSkills.forEach((item) => {
      if (item.skill === newSkill) {
        const proofSkillsNames = proofSkills.map((item) => item.skill);
        if (!newSkills.includes(newSkill) && !proofSkillsNames.includes(newSkill)) {
          setNewSkills((prev) => [...prev, item.skill]);
        }
      }
    });
  };

  useEffect(() => {
    if (proofInfo?.id) {
      getForSetSkills();
    }
  }, [proofInfo.id]);

  const getForSetSkills = () => {
    getOneProofSkill(proofInfo.id)
      .then((data) => {
        setProofSkills(data.skills);
        setStartSkills(data.skills);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const currentSkills = () => {
    if (!!proofSkills && proofSkills.length > 0) {
      return proofSkills.map((item, i) => {
        return (
          <Chip
            key={i}
            label={item.skill}
            variant="outlined"
            onDelete={() => handleDelete(item.skill_id)}
            sx={{ m: '5px' }}
          />
        );
      });
    } else {
      return (
        <Box display="flex" alignItems="center">
          <Typography sx={{ color: 'neutral.whiteGrey', opacity: '0.8' }}> There are no skills yet. </Typography>
        </Box>
      );
    }
  };

  const newRenderSkills = () => {
    if (!!newSkills && newSkills.length > 0) {
      return newSkills.map((item, i) => {
        return <Chip key={i} label={item} variant="outlined" onDelete={() => handleDelete(item)} sx={{ m: '5px' }} />;
      });
    } 
  };

  const onEditProofHandler = () => {
    let talentId = getCurrentPersonId();
    return async (values) => {
      const newProof = {
        title: values.title,
        description: values.desc,
        link: values.link,
        status: 'DRAFT',
      };
      if (Object.keys(newProof).length === 0) {
        setOpenEditModal(false);
      } else {
        try {
          await editTalentProof(talentId, proofInfo.id, newProof);
          if (!!newSkills && newSkills.length > 0) {
            const serviceProofsForPost = { skills: newSkills };
            await postOneProofSkill(talentId, proofInfo.id, serviceProofsForPost).catch((error) => {
              console.log(error);
            });
            await getForSetSkills();
            setNewSkills([]);
          } 
          if (!!deleteSkillsId && deleteSkillsId.length > 0) {
            await deleteSkillsId.forEach((item) => {
              deleteSkill(talentId, proofInfo.id, item);
            });
            setDeleteSkillsId([]);
          }
          setUpdated(true);
          navigate(`/profile/${talentId}?status=draft`);
        } catch (error) {
          console.error(error);
        }
        setOpenEditModal(false);
      }
    };
  };

  const editProof = {
    id: 'add-modal',
    submitBtnName: 'Accept',
    title: 'You can edit this proof',
    onSubmit: onEditProofHandler(editTalentProof),
    initialValues: {
      title: proofInfo.title,
      desc: proofInfo.description,
      link: proofInfo.link,
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

  const handleDelete = (skillValue) => {
    if (typeof skillValue !== 'number') {
      setDeleteSkillsId((prev) => [...prev]);
      newSkills.map((item, i) => {
        const newSkillClone = [...newSkills];
        if (item === skillValue) {
          newSkillClone.splice(i, 1);
          setNewSkills(newSkillClone);
        }
      });
    } else {
      setDeleteSkillsId((prev) => [...prev, skillValue]);
      proofSkills.map((item, i) => {
        const newSkillClone = [...proofSkills];
        if (item.skill_id === skillValue) {
          newSkillClone.splice(i, 1);
          setProofSkills(newSkillClone);
        }
      });
    }
  };

  return (
    <Dialog
      open={openEditModal}
      onClose={(e) => {
        e.stopPropagation();
        setOpenEditModal(false);
        setNewSkills([]);
        setProofSkills(startSkills);
      }}
      aria-labelledby="contained-Dialog-title-vcenter"
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 4, bgcolor: 'neutral.white', py: 0 },
      }}
    >
      <DialogTitle id="contained-Dialog-title-vcenter">{editProof.title}</DialogTitle>
      <DialogContent>
        <Form {...editProof}>
          <Box sx={{ width: '100%', mt: '15px' }}>
            <Stack display="flex" flexDirection="row" alignItems="center" flexWrap="wrap" mb="15px">
              {currentSkills()}
              {newRenderSkills()}
              <IconButton aria-label="addSkill" onClick={() => setSearchDisplay('block')}>
                <AddIcon />
                {/* <AddCircleOutlinedIcon sx={{ fontSize: 30 }} /> */}
              </IconButton>
            </Stack>
            <Box display={searchDisplay}>
              <SkillAutocomplete handleAddSkill={handleAddSkill} setAllSkills={setAllSkills} skill={skill} setSkill={setSkill} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <Button
              variant="outlined"
              onClick={() => {
                setOpenEditModal(false);
                setNewSkills([]);
                setProofSkills(startSkills);
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
              {editProof.submitBtnName}
            </Button>
          </Box>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
