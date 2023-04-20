import * as yup from 'yup';
import { Form } from '../../../../../../shared/components/Form';
import { addTalentProof } from '../../../../../../shared/service/ProfileService/ProfileService';
import { getCurrentTalentId } from '../../../../../../shared/service/AuthorizationService';
import { ProofTextField } from '../../../../../../shared/components/Fields/ProofTextField';
import { ProofLinkField } from '../../../../../../shared/components/Fields/ProofLinkField/ProofLinkField';
import { Button, Dialog, DialogContent, DialogTitle, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NewProofModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  const onAddProofHandler = (action) => {
    let talentId = getCurrentTalentId();
    return async (values) => {
      const newProof = {
        title: values.desc.slice(0, 80),
        description: values.desc,
        link: values.link,
      };
      if (Object.keys(newProof).length === 0) {
        onClose();
      } else {
        try {
          await addTalentProof(talentId, newProof);
          navigate(`/profile/${talentId}?status=drafts`);
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
      desc: '',
      link: '',
    },
    validationSchema: yup.object({
      desc: yup.string().required('Some information is required'),
      link: yup.string().url('It must be a valid url').nullable(),
    }),
    fieldsRenderers: {
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
