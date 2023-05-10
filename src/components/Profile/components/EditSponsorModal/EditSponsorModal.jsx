import { useState } from 'react';
import * as yup from 'yup';
import { Form } from '../../../../shared/components/Form';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { BusinessField } from '../../../../shared/components/Fields/BusinessField';
import { AvatarLinkField } from '../../../../shared/components/Fields/AvatarLinkField';
import { Dialog, DialogTitle, DialogContent, Box, Button } from '@mui/material';
import { getCurrentPersonId } from '../../../../shared/service/AuthorizationService';
import { patchSponsor } from '../../../../shared/service/SponsorProfileService';
export const EditSponsorModal = ({ open, onClose, person: sponsor, setPerson: setSponsor }) => {
  const onEditProfileHandler = (action) => {
    let sponsorId = getCurrentPersonId();
    return async (values) => {
      let sponsorNewProfile = {};

      sponsorNewProfile = {
        ...sponsor,
        full_name: values.full_name,
        avatar: values.avatar,
        company: values.company,
      };

      try {
        const response = await action(sponsorId, sponsorNewProfile);
        response.id = sponsorId;
        setSponsor(response);
      } catch (error) {
        console.error(error);
      }
      onClose();
    };
  };
  const editForm = {
    id: 'edit-modal',
    submitBtnName: 'Accept',
    title: 'You can edit your profile',
    onSubmit: onEditProfileHandler(patchSponsor),
    initialValues: {
      full_name: sponsor.full_name,
      avatar: sponsor.avatar,
      company: sponsor.company,
    },
    validationSchema: yup.object({
      full_name: yup
        .string()
        .min(4, 'Full name must be more than 4 characters')
        .max(64, 'Full name must be less than 64 characters')
        .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers')
        .required('Full name is required'),
      avatar: yup.string().url('Avatar must be a valid url').nullable(),
      company: yup
        .string()
        .min(2, 'Company must be at least 2 characters')
        .max(50, 'Company must be at most 50 characters')
        .nullable(),
    }),
    fieldsRenderers: {
      full_name: FullNameField,
      avatar: AvatarLinkField,
      company: BusinessField,
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
      <DialogTitle id="contained-Dialog-title-vcenter">{editForm.title}</DialogTitle>
      <DialogContent>
        <Form {...editForm}>
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
              {editForm.submitBtnName}
            </Button>
          </Box>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
