import * as yup from 'yup';
import { Form } from '../../../../../../shared/components/Form';
import { addTalentProof } from '../../../../../../shared/service/ProfileService/ProfileService';
import { getCurrentTalentId } from '../../../../../../shared/service/AuthorizationService';
import { ProofTextField } from '../../../../../../shared/components/Fields/ProofTextField';
import { ProofLinkField } from '../../../../../../shared/components/Fields/ProofLinkField/ProofLinkField';
import { Button, Dialog, DialogContent, DialogTitle, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProofTitleField } from '../../../../../../shared/components/Fields/ProofTitleField/ProofTitleField'; 

export const NewProofModal = ({ open, onClose, setUpdated }) => {
  const navigate = useNavigate();

  const onAddProofHandler = () => {
    let talentId = getCurrentTalentId();
    return async (values) => {
      const newProof = {
        title: values.title,
        description: values.desc,
        link: values.link,
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
      onClose={onClose}
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <Button variant="outlined" onClick={onClose} sx={{ mt: 4, px: 8, borderRadius: '6px' }}>
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
