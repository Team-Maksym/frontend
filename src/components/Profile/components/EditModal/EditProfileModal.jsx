import { Modal } from '../../../../shared/components/Modal';
import * as yup from 'yup';
import { FullNameField } from '../../../../shared/components/Fields/FullNameField';
import { Form } from '../../../../shared/components/Form';
import React from 'react';
import { BirthdayField } from '../../../../shared/components/Fields/AgeField';
import { AvatarLinkField } from '../../../../shared/components/Fields/AvatarLinkField';
import { ContactInformationField } from '../../../../shared/components/Fields/ContactInformationField';
import { EducationField } from '../../../../shared/components/Fields/EducationField';
import { ExperienceField } from '../../../../shared/components/Fields/ExperienceField';
import { deleteTalent, getOneTalent } from '../../../../shared/service/ProfileService';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { patchTalentProfile } from '../../../../shared/service/ProfileService/ProfileService';
import async from 'async';
import { getCurrentTalentId } from '../../../../shared/service/AuthorizationService';

export const EditProfileModal = ({ open, onClose, talent, setTalent }) => {
  const navigate = useNavigate();
  // console.log(talent);

  const onEditProfileHandler = async (action) => {
    return async (values) => {
      await action(values);
      onClose();
    };
  };

  const editForm = {
    id: 'edit-modal',
    submitBtnName: 'Accept',
    title: 'You can edit your profile',
    onSubmit: onEditProfileHandler(patchTalentProfile),
    //TODO: add initialValues from DB
    initialValues: {
      full_name: '',
      avatar: '',
      contact_information: '',
      age: '',
      education: '',
      experience: '',
    },
    validationSchema: yup.object({
      full_name: yup
        .string('Enter your full name')
        .min(4, 'Full name must be more than 4 characters')
        .max(64, 'Full name must be less than 64 characters')
        .matches(/^[A-Za-z\s'-]+$/, 'Full name must not contain symbols or numbers'),
      // .required('Field is required'),
      avatar: yup
        .string('Enter your avatar URL')
        .matches(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i, 'Invalid image URL'),
      contact_information: yup
        .string('Enter your contact information')
        // .required('Experience is required')
        .matches(/^[a-zA-Z\s]*$/, 'Contact information must contain only letters and spaces')
        .min(2, 'Contact information must be at least 2 characters')
        .max(50, 'Contact information must be at most 50 characters'),
      birthday: yup.string(),
      education: yup
        .string('Enter your last education')
        // .required('Education is required')
        .matches(/^[a-zA-Z\s]*$/, 'Education must contain only letters and spaces')
        .min(2, 'Education must be at least 2 characters')
        .max(50, 'Education must be at most 50 characters'),
      experience: yup
        .string('Enter your work experience')
        // .required('Experience is required')
        .matches(/^[a-zA-Z\s]*$/, 'Experience must contain only letters and spaces')
        .min(2, 'Experience must be at least 2 characters')
        .max(50, 'Experience must be at most 50 characters'),
    }),
    fieldsRenderers: {
      full_name: FullNameField,
      avatar: AvatarLinkField,
      contact_information: ContactInformationField,
      birthday: BirthdayField,
      education: EducationField,
      experience: ExperienceField,
    },
  };

  return (
    <Modal title={editForm.title} open={open} onClose={onClose}>
      <Form {...editForm} />
    </Modal>
  );
};
