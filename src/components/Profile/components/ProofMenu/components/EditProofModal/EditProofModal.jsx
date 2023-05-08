import * as yup from 'yup';
import { Form } from '../../../../../../shared/components/Form';
import { getCurrentPersonId } from '../../../../../../shared/service/AuthorizationService';
import { ProofTextField } from '../../../../../../shared/components/Fields/ProofTextField';
import { ProofLinkField } from '../../../../../../shared/components/Fields/ProofLinkField/ProofLinkField';
import { Button, Dialog, DialogContent, DialogTitle, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProofTitleField } from '../../../../../../shared/components/Fields/ProofTitleField/ProofTitleField';
import { editTalentProof } from '../../../../../../shared/service/TalentProfileService';
import { useContext } from 'react';
import { ProofsOneTalentContext } from '../../../../../../shared/context';

export const EditProofModal = ({ openEditModal, proofInfo }) => {
  const { setOpenEditModal, setUpdated } = useContext(ProofsOneTalentContext);

  const navigate = useNavigate();
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

  return (
    <Dialog
      open={openEditModal}
      onClose={() => setOpenEditModal(false)}
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <Button
              variant="outlined"
              onClick={() => setOpenEditModal(false)}
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
